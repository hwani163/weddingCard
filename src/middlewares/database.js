const knex = require('knex');
const { connection } = require('../const/connection');
const client = knex(connection);
export default async function database(req, res, next) {
  try {
    req.dbClient = client;
    return next();
  } catch (err) {
    console.error(`init() error: ${err.message}`);
  }
}
