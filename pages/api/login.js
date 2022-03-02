import db from '@Server/dataBase';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
  if (req.method === 'POST') { await login(req, res); }
};

const login = async (req, res) => {
  const { id, password } = req.body.params.data;
  const values = [id, password];

  res.status(200).json({
    // result: jwt.sign({
    //   type: 'JWT',
    //   nickname: 'test',
    // }, 'TEST_KEY', {
    //   expiresIn: '15m', // 만료시간 15분
    //   issuer: '토큰발급자',
    // }),
    test: 'hi',
  });
  // try {
  //   // await db.one(SELECT_USER, values);
  //
  //   res.status(200).json({
  //     // result: jwt.sign({
  //     //   type: 'JWT',
  //     //   nickname: 'systemadmin',
  //     // }, 'TEST_KEY', {
  //     //   expiresIn: '15m', // 만료시간 15분
  //     //   issuer: '토큰발급자',
  //     // }),
  //     test: 'hi',
  //   });
  // } catch (e) {
  //   res.status(500).end();
  // }
};

const SELECT_USER = `
  SELECT
    u.id
    , u.user_id as "userId"
    , u.user_password as "userPassword"
    , u.user_auth as "userAuth"
  FROM YLG_USER u
  WHERE u.user_id = $1
    AND u.user_password = $2
`;

export default handler;
