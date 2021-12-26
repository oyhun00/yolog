import { Client } from 'pg';
import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../server/dataBase';

export default async (req, res) => {
  try {
    const user = await db.one('SELECT test FROM test');
    console.log(user);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).end();
  }
}