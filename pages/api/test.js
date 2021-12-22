import { Client } from 'pg';
import { NextApiRequest, NextApiResponse } from 'next';
import Database from '../../server/dataBase';

export default async (req, res) => {
  await Database.execute(
    Client.query('SELECT TEST')
      .then(() => {
        console.log("hi");
        res.status(200).json({
          text: "hello"
        })
      })
  );
}