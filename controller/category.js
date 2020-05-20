var express = require('express');
var router = express.Router()
var queries = require('../model/category_queries')

router.get('/CategoryData', function (req, res) {
    queries.CategoryData()
        .then((res_data) => {
            var count = res_data.length
            var data = {
                "count": count,
                "rows": res_data
            }
            res.send(data)
        }).catch((err) => {
            console.log(err)
        })
})

router.get('/CategoryDataById/:id', function (req, res) {
    var id = req.params.id
    queries.DepartmentDataById(id)
        .then((res_data) => {
            res.send(res_data)
        }).catch((err) => {
            res.send(err)
            console.log(err)
        })
})


router.get('/categoryInProduct/:id', function (req, res) {
    var id = req.params.id
    queries.productCategoryJoin(id).then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
        console.log(err)
    })
})

router.get('/categoryInDepartment/:id', function (req, res) {
    var id = req.params.id
    queries.departmentCategory(id).then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router