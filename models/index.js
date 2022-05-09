const bookshelf = require('../bookshelf')

const User = bookshelf.model('User', {
    tableName:'Users'
});

module.exports = { User };