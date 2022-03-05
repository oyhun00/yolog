import jwt from 'jsonwebtoken';

const TEST_SECRET_KET = 'TEST_KEY';
const authMiddleware = async (req, res, handler) => {
  let decoded;
  try {
    decoded = jwt.verify(req.cookies.auth, TEST_SECRET_KET);

    return await handler(req, res);
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
