const knex = require('../connection/mysql')

knex.schema.createTable("moveToCart",(table)=>{
    table.integer("item_id")
    table.string("cart_id")
    table.integer("product_id")
    table.string("attributes")
    table.integer("quantity")
    table.integer("buy_now")
    table.datetime("added_on")
    }).then(()=>{
        console.log("created tbl")
    }).catch((err)=>{
        console.log(err,"err hai")
    });

knex.schema.createTable("shopping_cart" ,(table) => {
    table.increments("item_id")
    table.string("cart_id")
    table.integer("product_id")
    table.string("attributes")
    table.integer("quantity")
    table.integer("buy_now")
    table.datetime("added_on")
    }).then(()=>{
        console.log("created tbl")
    }).catch((err)=>{
        console.log(err,"err hai")
    });

module.exports = knex