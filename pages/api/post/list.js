import db from '@Server/dataBase';

const handler = async (req, res) => {
  if (req.method === 'GET') { await getPostList(req, res); }
};

const getPostList = async (req, res) => {
  const { tag } = req.query;
  const values = [tag];

  try {
    const posts = await db.any(SELECT_POST_LIST, values);
    const tags = await db.any(SELECT_POST_GROUP_BY_TAG);

    res.status(200).json({
      posts,
      tags,
    });
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
    , TO_CHAR(p.crt_dttm, 'YYYY-MM-DD') as "crtDttm"
    , TO_CHAR(p.udt_dttm, 'YYYY-MM-DD') as "udtDttm"
    , p.tag as "tags"
    , p.delete_fl as "deleteFl"
    , CASE WHEN $1 != 'undefined' THEN false ELSE true END as "isIndex"
  FROM YLG_POST p
  WHERE p.delete_fl = false
    AND CASE WHEN $1 != 'undefined' THEN $1 = any(p.tag)
        ELSE 1=1
    END
  ORDER BY p.ID DESC
`;

const SELECT_MAIN_POST_LIST = `
  SELECT
    p.ID
    , p.title
    , p.thumbnail
    , p.thumbnail_text as "thumbnailText"
    , p.content
    , TO_CHAR(p.crt_dttm, 'YYYY-MM-DD') as "crtDttm"
    , TO_CHAR(p.udt_dttm, 'YYYY-MM-DD') as "udtDttm"
    , p.tag as "tags"
    , p.delete_fl as "deleteFl"
    , CASE WHEN $1 != 'undefined' THEN false ELSE true END as "isIndex"
  FROM YLG_POST p
  WHERE p.delete_fl = false
    AND CASE WHEN $1 != 'undefined' THEN $1 = any(p.tag)
        ELSE 1=1
    END
  ORDER BY p.ID DESC
  LIMIT 5
`;

const SELECT_POST_GROUP_BY_TAG = `
  SELECT UNNEST(a.tag) as "mostTags"
  FROM YLG_POST a
  WHERE a.delete_fl = false
  GROUP BY "mostTags"
  ORDER BY COUNT(a.tag) DESC
`;

export default handler;
