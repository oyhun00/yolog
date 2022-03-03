import jwt from 'jsonwebtoken';

const TEST_SECRET_KET = 'TEST_KEY';
const authMiddleware = async (req, res, handler) => {
  try {
    console.log('authMiddleware ======== ', req.decoded);
    req.decoded = jwt.verify(req.headers.authorization, TEST_SECRET_KET);

    return await handler(req, res);
  } catch (e) {
    console.log('jsonwebtokenerror ======== ', e);
    if (e.name === 'JsonWebTokenError') {
      console.log('JsonWebTokenError ======== ', e);
      return res.status(401).json({
        code: 401,
        message: '유효하지 않은 토큰',
      });
    }

    if (e.name === 'TokenExpiredError') {
      console.log('TokenExpiredError ======== ', e);
      return res.status(419).json({
        code: 419,
        message: '토큰 만료',
      });
    }
  }
};

export default authMiddleware;
