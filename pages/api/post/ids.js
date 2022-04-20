import db from '@Server/dataBase';

const handler = async (req, res) => {
  if (req.method === 'GET') { await getPostsById(req, res); }
};

const getPostsById = async (req, res) => {
  try {
    const posts = await db.any(SELECT_POST_LIST);

    res.status(200).json(posts);
  } catch (e) {
    res.status(500).end();
  }
};

const SELECT_POST_LIST = `
  SELECT p.ID
  FROM YLG_POST p
  WHERE p.delete_fl = false
  ORDER BY p.ID DESC
`;

export default handler;
