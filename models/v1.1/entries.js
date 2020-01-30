var createEntry = (body) => {
    const db = require('../../db')()
    return (db('entries').insert({
        // 'created': body.created,
        'name': body.name,
        'email': body.email,
        'gdpr': body.gdpr
    })
    )
}

var getEntries = () => {
    const db = require('../../db')()
    return db.select(['name', 'email', 'gdpr'])
        .from('entries')
}

module.exports = {
    createEntry,
    getEntries
}