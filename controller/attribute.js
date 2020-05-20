var express = require('express');
var router = express.Router()
var queries = require('../model/attribute_queries')

router.get('/attributeData', function (req, res) {
    queries.attributeData().then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
    })
})

router.get('/attributeDataById/:id', function (req, res) {
    var id = req.params.id
    queries.attributeById(id).then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
    })
})


router.get('/attributeValueById/:id', function (req, res) {
    var id = req.params.id
    console.log(id)
    queries.attributeValue(id).then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        console.log(err)
        res.send(err)
    })
})

router.get('/attributeProduct/:id', function (req, res) {
    var id = req.params.id
    queries.attributeProduct(id).then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router