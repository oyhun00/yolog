import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import jwtConfig from '@Config/jwt-config';
import db from '@Server/dataBase';

const handler = async (req, res) => {
  const { id, password } = req.body.params.data;
  const values = [id];

  try {
    db.one(SELECT_USER, values)
      .then((result) => {
        if (result) {
          const { userId, userAuth, userPassword } = result;

          bcryptjs.compare(password, userPassword, (err, compareResult) => {
            if (compareResult) {
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
            } else {
              res.status(200).json({
                success: false,
                message: '비밀번호가 올바르지 않습니다.',
              });
            }
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
    , u.user_password as "userPassword"
  FROM YLG_USER u
  WHERE u.user_id = $1
`;

export default handler;
