import db from '@Server/dataBase';

const handler = async (req, res) => {
  if (req.method === 'GET' && !req.query.id) { await getPostList(req, res); }
  else if (req.method === 'GET' && req.query.id) { await getPost(req, res); }
  else if (req.method === 'POST') { await addPost(req, res); }
};

const getPostList = async (req, res) => {
  try {
    const result = await db.any(SELECT_POST_LIST);
    res.status(200).json(result);
  } catch (e) {
    console.log('@!$!@#$!@$', e);
    res.status(500).end();
  }
};

const getPost = async (req, res) => {
  const { id } = req.query;
  const params = [parseInt(id, 10)];

  try {
    const result = await db.one(SELECT_POST, params);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).end();
  }
};

const addPost = async (req, res) => {
  const {
    title, content, thumbnail, thumbnailText,
  } = req.body.params.data;
  const values = [title, content, thumbnail, thumbnailText];

  try {
    await db.none(INSERT_POST, values);
    res.status(301).redirect('/post');
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
`;

const SELECT_POST = `
  SELECT
    p.ID
    , p.title
    , p.thumbnail
    , p.content
    , TO_CHAR(p.crt_dttm, 'YYYY-MM-DD') as "crtDttm"
    , p.udt_dttm as "udtDttm"
    , p.delete_fl as "deleteFl"
  FROM YLG_POST p
  WHERE p.delete_fl = false
    AND p.id = $1
`;

const INSERT_POST = `
  INSERT INTO YLG_POST (
    title,
    content,
    crt_dttm,
    thumbnail,
    thumbnail_text
  ) VALUES (
    $1,
    $2,
    NOW(),
    $3,
    $4
  )
`;

export default handler;
