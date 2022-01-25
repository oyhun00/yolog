import db from '../../server/dataBase';

const handler = async (req, res) => {
  if(req.method === 'GET') { await getPostList(req, res); }
  else { await getPost(req, res); }
}

const getPostList = async (req, res) => {
  try {
    const data = await db.any(SELECT_POST_LIST);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).end();
  }
}

const getPost = async (req, res) => {
  console.log('=======getPost============', req.query);
  const { id } = req.query;
  const params = [id];

  try {
    const data = await db.one(SELECT_POST, params);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).end();
  }
}

const SELECT_POST_LIST = `
  SELECT
    p.ID as id
    , p.title as title
    , p.title_image as titleImage
    , p.content as content
    , p.crt_dttm as crtDttm
    , p.udt_dttm as udtDttm
    , p.delete_fl as deleteFl
  FROM YLG_POST p
  WHERE p.delete_fl = false
`;

const SELECT_POST = `
  SELECT
    p.ID as id
    , p.title as title
    , p.title_image as titleImage
    , p.content as content
    , p.crt_dttm as crtDttm
    , p.udt_dttm as udtDttm
    , p.delete_fl as deleteFl
  FROM YLG_POST p
  WHERE p.delete_fl = false
    AND p.id = $1
`;

export default handler;
