import db from '@Server/dataBase';
import bcryptjs from 'bcryptjs';

const handler = async (req, res) => {
  if (req.method === 'POST') { await addUser(req, res); }
};

const addUser = async (req, res) => {
  const { id, password } = req.body.params.data;

  bcryptjs.genSalt(10, (e, salt) => {
    bcryptjs.hash(password, salt, (error, hash) => {
      const values = [id, hash];

      db.none(ADD_USER, values).then(() => {
        res.status(200).json({
          success: true,
          message: '정상적으로 등록했어요.',
        });
      });
    });
  });
};

const ADD_USER = `
  INSERT INTO YLG_USER (
    user_id
    , user_password
    , user_auth
  ) VALUES (
    $1,
    $2,
    'ADMIN'
  )
`;

export default handler;
