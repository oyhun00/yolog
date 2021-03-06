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
    return res.status(200).json({
      success: false,
    });
  }
};

export default handler;
