import jwt from 'jsonwebtoken';
import jwtConfig from '@Config/jwt-config';

const authMiddleware = async (req, res, handler) => {
  let decoded;
  const { accessSecretKey } = jwtConfig;
  const accessToken = req.headers.authorization?.split(' ')[1];

  try {
    decoded = jwt.verify(accessToken, accessSecretKey);

    if (!decoded || decoded.userAuth !== 'ADMIN') {
      return res.status(200).json({
        success: false,
        message: '접근 권한이 없습니다.',
      });
    }

    return await handler(req, res);
  } catch (e) {
    console.log('123!@#!#!@#!@#!@#!@#!#2', e);
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

    return res.status(200).json({
      success: false,
      message: '접근 권한이 없습니다.',
    });
  }
};

export default authMiddleware;
