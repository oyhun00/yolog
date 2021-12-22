import { Pool, Client } from 'pg';
import config from '../db-config/dbConfg.json';

class Database {
  constructor() {
    this.Client = new Client(config);
    this.Client.connect();
  }

  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.Client.query(sql, args, (err, rows) => {
        if (err) {
          console.log(err.message);
          reject(err);
        }

        resolve(rows);
      });
    });
  }

  execute(callback) {
    return callback(this).then(
        (result) => result,
        (err) => { throw err; },
      );
  }}
  
  module.exports = new Database();