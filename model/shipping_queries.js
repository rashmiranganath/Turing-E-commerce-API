const knex = require('../connection/mysql')

let getShippingRegion = () => {
    return knex.select('*').from('shipping_region')
}

let shipping_region_id = (shipping_region_id) => {
    return knex.table('shipping').select('*').innerJoin('shipping_region' , 'shipping.shipping_region_id' , '=' , 'shipping_region.shipping_region_id').where('shipping_region.shipping_region_id' , shipping_region_id)
}


 module.exports = {getShippingRegion , shipping_region_id}