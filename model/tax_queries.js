const knex = require('../connection/mysql')

let taxGet = () => {
    return knex.select('*').from('tax')
}

let getById = (tax_id) => {
    return knex.select('*').from('tax').where('tax_id', tax_id)
}

module.exports = { taxGet ,getById }