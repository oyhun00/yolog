import db from '@Server/dataBase';

const handler = async (req, res) => {
  if (req.method === 'GET') { await getPostList(req, res); }
};

const getPostList = async (req, res) => {
  const { tag, page } = req.query;
  const values = [tag, page];

  try {
    const tags = await db.any(SELECT_POST_GROUP_BY_TAG);
    const posts = await db.any(SELECT_POST_LIST, values);
    const { postsCount } = tag ? await db.one(SELECT_POST_COUNT, [tag]) : { postsCount: 0 };

    res.status(200).json({
      posts,
      tags,
      postsCount,
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
  FROM YLG_POST p
  WHERE p.delete_fl = false
    AND CASE WHEN $1 != 'undefined' THEN $1 = any(p.tag)
        ELSE 1=1
    END
  ORDER BY p.ID DESC
  LIMIT CASE WHEN $1 != 'undefined' THEN 9
        ELSE null END
  OFFSET ($2 * 9) - 9
`;

const SELECT_POST_COUNT = `
  SELECT COUNT(p.ID) as "postsCount"
  FROM YLG_POST p
  WHERE p.delete_fl = false
    AND $1 = any(p.tag)
`;

const SELECT_POST_GROUP_BY_TAG = `
  SELECT
    UNNEST(a.tag) as "mostTags"
    , COUNT(a.tag) as "tagCount"
  FROM YLG_POST a
  WHERE a.delete_fl = false
  GROUP BY "mostTags" HAVING COUNT(a.tag) > 1
  ORDER BY COUNT(a.tag) DESC
`;

export default handler;
