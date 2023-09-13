module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost:5432',
      user: 'TestUser',
      password: 'Test123456',
      database: 'Bincom_Assessment',
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    }
  },
};