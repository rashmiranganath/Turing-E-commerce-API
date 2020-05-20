var express = require('express');
var router = express.Router()
var queries = require('../model/tax_queries')

router.get('/get' ,function(req , res){
    queries.taxGet().then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
    })
})

router.get('/getById/:tax_id' , function(req,res) {
    var tax_id = req.params.tax_id
    queries.getById(tax_id).then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router