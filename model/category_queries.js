var knex = require('../connection/mysql')

let CategoryData = () => {
    return knex.select('*').from('category')
}

let CategoryDataById = (id) => {
    return knex.select('*').from('category').where('category_id', id)
}

let productCategoryJoin = (id) => {
    return knex.table('category').select('*').innerJoin('product_category' , 'category.category_id' , '=' , 'product_category.category_id').where('product_id' , id)
}

let departmentCategory = (id) => {
    return knex.table('category').select('*').from('category').where('department_id' , id)
}

module.exports = {CategoryData,CategoryDataById ,productCategoryJoin , departmentCategory}