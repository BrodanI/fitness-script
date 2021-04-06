const knex = require('knex')(require('./knexfile'));
const bookshelf = require('bookshelf')(knex);

const knexConfig = process.env.NODE_ENV === "production"
  ? require("./knexfile").production
  : require("./knexfile").development;

module.exports = bookshelf;