const express = require('express');
const bodyparser = require("body-parser");
const app = express()
const customer = require('./controller/customer')
const attribute = require('./controller/attribute')
const department = require('./controller/department')
const category = require('./controller/category')  
const product = require('./controller/product')
const tax = require('./controller/tax')
const shipping = require('./controller/shipping')
const shopping_cart = require('./controller/shopping_cart')

app.use(bodyparser.json())



app.use('/customer' , customer)
app.use('/attribute' ,attribute)
app.use('/department' ,department)
app.use('/category' , category)
app.use('/product' , product)
app.use('/tax' , tax)
app.use('/shipping' , shipping)
app.use('/shopping_cart',shopping_cart )



app.listen(3000 , function(res,err) {
    if(!err) {
        console.log("server running")
    }
    else {
        throw err;
    }
})