// Update with your config settings.

module.exports = {
  // teaching knex to connect to the development database
  development: {
    client: 'sqlite3', // only needed when using SQLite 3
    connection: {
      filename: './data/produce.db3' // where is the database file?
    },
    migrations: {
      directory: './data/migrations' // will be created automatically
    },
    seeds: {
      directory: '.data/seeds'
    }
  },

};
