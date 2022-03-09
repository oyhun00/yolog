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
          const token = jwt.sign(
            { userId, userAuth },
            secretKey,
            option,
          );
          res.setHeader('Set-Cookie', `auth=${token};`);
          // res.setHeader('Set-Cookie', `auth=;`);
          res.status(200).json({
            success: true,
            token,
            result,
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
