import db from '@Server/dataBase';

const handler = async (req, res) => {
  if (req.method === 'GET') { await getPostList(req, res); }
};

const getPostList = async (req, res) => {
  try {
    const result = await db.any(SELECT_POST_LIST);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).end();
  }
};

const SELECT_POST_LIST = `
  SELECT
    p.ID
    , p.title
    , p.thumbnail
    , p.thumbnail_text as "thumbnailText"
    , p.content
    , p.crt_dttm as "crtDttm"
    , p.udt_dttm as "udtDttm"
    , p.delete_fl as "deleteFl"
  FROM YLG_POST p
  WHERE p.delete_fl = false
  ORDER BY p.ID DESC
`;

export default handler;
