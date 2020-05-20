var knex = require('../connection/mysql')


let DepartmentData = () => {
    return knex.select('*').from('department')
}

let DepartmentDataById = (id) => {
    return knex.select('*').from('department').where('department_id', id)
}

module.exports = {DepartmentData ,DepartmentDataById}