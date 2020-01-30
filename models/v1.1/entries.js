var createEntry = (body) => {
    const db = require('../../db')()
    return (db('entries').insert({
        // 'created': body.created,
        'name': body.name,
        'email': body.email
    })
    )
}

var getEntries = () => {
    const db = require('../../db')()
    return db.select(['name', 'email'])
        .from('entries')
}

module.exports = {
    createEntry,
    getEntries
}