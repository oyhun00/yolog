import db from '@Server/dataBase';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
  if (req.method === 'POST') { await login(req, res); }
};
const TEST_KEY = 'TEST_KEY';
const login = async (req, res) => {
  const { id, password } = req.body.params.data;
  const values = [id, password];

  try {
    // await db.one(SELECT_USER, values);

    res.status(200).json({
      token: jwt.sign(
        { id },
        TEST_KEY,
        { expiresIn: '15m' },
      ),
    });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
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
