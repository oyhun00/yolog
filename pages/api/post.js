import { Client } from 'pg';
import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../server/dataBase';

export default async (req, res) => {
  try {
    const data = await db.one(SELECT_POST_LIST);
    console.log("asdasdasdadasdasdasdasdas==============da", data);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).end();
  }
}

const SELECT_POST_LIST = `
  SELECT
    p.ID
    , p.title
    , p.content
    , p.crt_dttm
    , p.udt_dttm
    , p.delete_fl
  FROM YLG_POST p
  WHERE p.delete_fl = false
`;
