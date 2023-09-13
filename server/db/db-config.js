import knex from 'knex';
import knexfile from '../knexfile';

const dbEnvironment = process.env.NODE_ENV;
const knexConfig = knexfile[dbEnvironment];

module.exports = knex(knexConfig);