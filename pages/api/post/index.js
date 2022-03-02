import db from '@Server/dataBase';

const handler = async (req, res) => {
  if (req.method === 'GET') { await getPost(req, res); }
  if (req.method === 'POST') { await addPost(req, res); }
  if (req.method === 'DELETE') { await deletePost(req, res); }
  if (req.method === 'PUT') { await updatePost(req, res); }
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
    title, content, thumbnail, thumbnailText, tags,
  } = req.body.params.data;
  const values = [title, content, thumbnail, thumbnailText, tags];

  try {
    await db.none(INSERT_POST, values);
    res.status(200).end();
  } catch (e) {
    res.status(500).end();
  }
};

const deletePost = async (req, res) => {
  const { id } = req.query;
  const params = [parseInt(id, 10)];

  try {
    await db.none(DELETE_POST, params);
    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

const updatePost = async (req, res) => {
  const {
    id, title, content, thumbnail, thumbnailText, tags,
  } = req.body.params.data;
  const values = [id, title, content, thumbnail, thumbnailText, tags];

  try {
    await db.none(UPDATE_POST, values);
    res.status(200).end();
  } catch (e) {
    res.status(500).end();
  }
};

const SELECT_POST = `
  SELECT
    p.ID
    , p.title
    , p.thumbnail
    , p.content
    , TO_CHAR(p.crt_dttm, 'YYYY-MM-DD') as "crtDttm"
    , TO_CHAR(p.udt_dttm, 'YYYY-MM-DD') as "udtDttm"
    , p.delete_fl as "deleteFl"
    , p.tag as "tags"
  FROM YLG_POST p
  WHERE p.delete_fl = false
    AND p.id = $1
`;

const INSERT_POST = `
  INSERT INTO YLG_POST (
    title
    , content
    , crt_dttm
    , thumbnail
    , thumbnail_text
    , tag
  ) VALUES (
    $1,
    $2,
    NOW(),
    $3,
    $4,
    $5
  )
`;

const DELETE_POST = `
  UPDATE YLG_POST
  SET delete_fl = true
  WHERE id = $1
`;

const UPDATE_POST = `
  UPDATE YLG_POST
  SET title = $2
    , content = $3
    , udt_dttm = NOW()
    , thumbnail = $4
    , thumbnail_text = $5
    , tag = $6
  WHERE id = $1
`;

export default handler;
