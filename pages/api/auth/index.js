import jwt from 'jsonwebtoken';
import jwtConfig from '@Config/jwt-config';

const handler = async (req, res) => {
  const {
    accessSecretKey, refreshSecretKey, accessOption,
  } = jwtConfig;
  const { refreshToken } = req.cookies;
  let decoded;

  try {
    decoded = jwt.verify(refreshToken, refreshSecretKey);

    if (!decoded) {
      return res.status(200).json({
        success: false,
        message: '접근 권한이 없습니다.',
      });
    }

    const { userId, userAuth } = decoded;
    const accessToken = jwt.sign(
      { userId, userAuth },
      accessSecretKey,
      accessOption,
    );

    return res.status(200).json({
      success: true,
      isLogin: true,
      accessToken,
    });
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

    return res.status(200).json({
      success: false,
      message: '접근 권한이 없습니다.',
    });
  }
};

export default handler;
