module.exports = function() {
    const config = require('./knexfile')
    const knex = require('knex')(config)
    return knex
}
