const options = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'navgurukul',
        database: 'Turing'
    }
}
const knex = require('knex')(options);

module.exports = knex