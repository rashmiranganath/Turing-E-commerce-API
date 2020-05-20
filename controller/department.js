var express = require('express');
var router = express.Router()
var queries = require('../model/department_queries')


router.get('/DepartmentData', function (req, res) {
    queries.DepartmentData()
        .then((res_data) => {
            res.send(res_data)
        }).catch((err) => {
            console.log(err)
        })
})

router.get('/DepartmentDataById/:id', function (req, res) {
    var id = req.params.id
    queries.DepartmentDataById(id)
        .then((res_data) => {
            res.send(res_data)
        }).catch((err) => {
            console.log(err)
        })
})

module.exports = router