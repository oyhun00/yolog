import jwt from 'jsonwebtoken';
import jwtConfig from '@Config/jwt-config';

const authMiddleware = async (req, res, handler) => {
  let decoded;
  const { secretKey } = jwtConfig;

  try {
    decoded = jwt.verify(req.cookies.auth, secretKey);
    console.log('authMiddleware================ ', req.cookies);

    if (decoded) {
      if (decoded.userAuth === 'ADMIN') {
        return await handler(req, res);
      }

      return res.status(200).json({
        success: false,
        message: '접근 권한이 없습니다.',
      });
    }
  } catch (e) {
    if (e.name === 'JsonWebTokenError') {
      return res.status(401).json({
        code: 401,
        message: '유효하지 않은 토큰',
      });
    }

    if (e.name === 'TokenExpiredError') {
      return res.status(419).json({
        code: 419,
        message: '토큰 만료',
      });
    }
  }
};

export default authMiddleware;
