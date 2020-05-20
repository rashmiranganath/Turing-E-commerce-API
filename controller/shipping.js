var express = require('express');
var router = express.Router()
var queries = require('../model/shipping_queries')

router.get('/regions' , function(req ,res){
    queries.getShippingRegion().then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
    })
})

router.get('/regions/:shipping_region_id' , function(req ,res){
    var shipping_region_id = req.params.shipping_region_id
    queries.shipping_region_id(shipping_region_id).then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router

