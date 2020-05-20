var knex = require('../connection/mysql')


let attributeData = () => {
    return knex.select('*').from('attribute')
}

let attributeById = (id) => {
    return knex.select('*').from('attribute').where('attribute_id',id)
}

let attributeValue = (id) => {
    return knex.table('attribute').select('*').innerJoin('attribute_value','attribute.attribute_id' , '=' ,'attribute_value.attribute_id').where('attribute_value.attribute_id' , id)
}

let attributeProduct = (id) => {
    return knex.table('attribute_value').select('*').innerJoin('product_attribute' , 'attribute_value.attribute_value_id' ,'=' , 'product_attribute.attribute_value_id').where('product_id' , id)
}

module.exports = {attributeData , attributeById , attributeValue , attributeProduct}