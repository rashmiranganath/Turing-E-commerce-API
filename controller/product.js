var express = require('express');
var router = express.Router()
var queries = require('../model/product_queries')


router.get('/productData', function (req, res) {
    queries.productData().then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
    })
})

router.get('/productDataSearch/:search', function (req, res) {
    var search = req.params.search
    queries.productDataSearch(search).then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
    })
})

router.get('/productDataById/:id', function (req, res) {
    var id = req.params.id
    queries.productById(id).then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
    })
})

router.get('/productCategory/:category_id', function (req, res) {
    var category_id = req.params.category_id
    queries.categoryProduct(category_id).then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
    })
})

router.get('/productDepartment/:department_id', function (req, res) {
    var department_id = req.params.department_id
    queries.productDepartment(department_id).then((res_data) => {
        var length = res_data.length
        res.send({
            "count": length,
            "rows": res_data
        })
    }).catch((err) => {
        res.send(err)
    })
})

router.get('/productDetails/:product_id', function (req, res) {
    var product_id = req.params.product_id
    queries.productDetails(product_id).then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
    })
})

router.get('/productLocation/:product_id', function (req, res) {
    var product_id = req.params.product_id
    queries.productLocation(product_id).then((res_data) => {
        res.send(res_data)
    }).catch(() => {
        res.sendStatus(500)
    })
})

module.exports = router