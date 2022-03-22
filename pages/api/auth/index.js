import db from '@Server/dataBase';
import jwt from 'jsonwebtoken';
import jwtConfig from '@Config/jwt-config';

const handler = async (req, res) => {
  const {
    accessSecretKey, refreshSecretKey, accessOption,
  } = jwtConfig;
  const refreshToken = req.body.params.token;

  try {
    const { userId, userAuth } = jwt.verify(refreshToken, refreshSecretKey);

    if (userId && userAuth) {
      const accessToken = jwt.sign(
        { userId, userAuth },
        accessSecretKey,
        accessOption,
      );

      res.status(200).json({
        success: true,
        accessToken,
      });
    }
  } catch (e) {
    if (e.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        code: 401,
        message: '유효하지 않은 토큰',
      });
    }

    if (e.name === 'TokenExpiredError') {
      return res.status(419).json({
        success: false,
        code: 419,
        message: '토큰 만료',
      });
    }
  }

  res.status(200).json({
    success: true,
  });
};

const SELECT_USER = `
  SELECT
    u.id
    , u.user_id as "userId"
    , u.user_auth as "userAuth"
  FROM YLG_USER u
  WHERE u.user_id = $1
`;

export default handler;
