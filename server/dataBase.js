const pgp = require('pg-promise')();
const config = require('../config/db-config.json');

const db = () => {
  const dbKey = Symbol.for(`${db}.db`);
  const globalSymbols = Object.getOwnPropertySymbols(global);

  if (globalSymbols.indexOf(dbKey) < 0) {
    global[dbKey] = pgp(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`);
  }

  return global[dbKey];
};

export default (db)();
