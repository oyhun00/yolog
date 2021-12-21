import { Pool, Client } from 'pg';
const config = require('./config/db-config');
const { error } = require('./log-config');

class Database {
  constructor() {
    this.connection = new Client(config);
    this.connection.connect();
  }

  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
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