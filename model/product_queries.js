var knex = require('../connection/mysql')


let productData = () => {
    return knex.select('*').from('product')
}

let productDataSearch= (search) => {
    return knex.select('*').from('product').where('name' , 'like' , search)
}

let productById = (id) => {
    return knex.select('*').from('product').where('product_id', id)
}

let categoryProduct = (category_id) => {
    return knex.table('product').select('*').innerJoin('product_category' , 'product.product_id' , '=' , 'product_category.product_id').where('category_id' , category_id)
}

let productDepartment = (department_id) => {
    return knex.table('category').select('*').innerJoin('product_category' , 'category.category_id' , '=' , 'product_category.category_id').innerJoin('product' , 'product_category.product_id' , '=' , 'product.product_id').where('department_id' ,department_id)
}

let productDetails = (product_id) => {
    return knex.select('*').from('product').where('product_id' ,product_id)
}

let productLocation = ( product_id) => {
    return knex.table('category')
    .select('category.category_id',
    'category.name as category_name',
    'category.department_id',
    'department.name as department_name')
    .innerJoin('department' , 'category.department_id' ,'=' ,'department.department_id')
    .innerJoin('product_category' , 'category.category_id', '=' , 'product_category.category_id')
    .where('product_id' , product_id)

}

module.exports = {productData ,productDataSearch ,productById ,categoryProduct , productDepartment , productDetails ,productLocation }