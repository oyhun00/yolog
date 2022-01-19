import { Client } from 'pg';
import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../server/dataBase';

export default async (req, res) => {
  try {
    const data = await db.one(SELECT_POST_LIST);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).end();
  }
}

const SELECT_POST_LIST = `
  SELECT test
  FROM test
`;