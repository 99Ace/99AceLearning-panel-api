// Setting up the database connection
const knex = require('knex')({
    client: 'mysql',
    connection: {
      user: 'mikar',
      password:'M988m988!',
      database:'acelearning'
    }
  })
  const bookshelf = require('bookshelf')(knex)
  
  module.exports = bookshelf;