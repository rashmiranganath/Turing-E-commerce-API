const knex = require('../connection/mysql')

knex.schema.createTable("moveToCart",(table)=>{
    table.increments("item_id")
    table.integer("cart_id")
    table.integer("product_id")
    table.string("attributes")
    table.string("quantity")
    table.integer("buy_now")
    table.dattime("added_on")
    .then(()=>{
        console.log("created tbl")
    }).catch((err)=>{
        console.log(err,"err hai")
    })

})