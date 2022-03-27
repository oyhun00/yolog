import db from '@Server/dataBase';
import jwt from 'jsonwebtoken';
import jwtConfig from '@Config/jwt-config';

const handler = async (req, res) => {
  const { id, password } = req.body.params.data;
  const values = [id, password];

  try {
    db.one(SELECT_USER, values)
      .then((result) => {
        if (result) {
          const { userId, userAuth } = result;
          const {
            accessSecretKey, refreshSecretKey, accessOption, refreshOption,
          } = jwtConfig;

          const accessToken = jwt.sign(
            { userId, userAuth },
            accessSecretKey,
            accessOption,
          );

          const refreshToken = jwt.sign(
            { userId, userAuth },
            refreshSecretKey,
            refreshOption,
          );

          res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; path=/; httpOnly=true; secure=true;`);
          res.status(200).json({
            success: true,
            isLogin: true,
            accessToken,
          });
        }
      })
      .catch(() => {
        res.status(200).json({
          success: false,
          message: '로그인에 실패하였습니다',
        });
      });
  } catch (e) {
    res.status(500).end();
  }
};

const SELECT_USER = `
  SELECT
    u.id
    , u.user_id as "userId"
    , u.user_auth as "userAuth"
  FROM YLG_USER u
  WHERE u.user_id = $1
    AND u.user_password = $2
`;

export default handler;
