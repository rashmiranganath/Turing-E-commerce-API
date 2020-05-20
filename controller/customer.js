var express = require('express');
var router = express.Router()
var queries = require('../model/customer_queries')

console.log("customer")

const jwt = require('jsonwebtoken')



router.put('/customertUpdate/:customer_id', function (req, res) {
    console.log("customer2")
    var customer_id = req.params.customer_id
    var data = {
        "name": req.body.name,
        "email": req.body.email,
        "address_1": req.body.address_1,
        "city": req.body.city,
        "country": req.body.country,
        "mob_phone": req.body.mob_phone,
        "credit_card": req.body.credit_card

    }
    queries.customerUpdate(customer_id, data).then((res_data) => {
        res.sendStatus(200)
    }).catch((err) => {
        console.log(err)
        res.send(err)
    })
})

router.get('/customerById/:customer_id', function (req, res) {
    customer_id = req.params.customer_id
    queries.getCustomerById(customer_id).then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
    })
})

router.post('/customerPostData', function (req, res) {
    data = {
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "address_1": req.body.address_1,
        "city": req.body.city,
        "country": req.body.country,
        "mob_phone": req.body.mob_phone,
        "credit_card": req.body.credit_card
    }
    queries.postCustomerData(data).then((res_data) => {
        res.send(res_data)
    }).catch((err) => {
        res.send(err)
    })
})

router.post('/login', function (req, res) {
    email = req.body.email
    console.log(email)
    password = req.body.password
    console.log(password)
    queries.getSignInData(email).then((res_data) => {
        console.log(res_data)
        if (res_data[0].email.length == 0) {
            console.log(msg = "invalid email")
            res.send(msg)
        } else {
            console.log("valid email")
            if (res_data[0].password == password) {
                console.log("correct password")
                let token = jwt.sign({ email }, "rashmi")
                res.cookie(token)
                console.log(token)
                res.send('loing successful')
            } else {
                msg = "passwords dont match"
                res.send(msg)
            }
        }
    }).catch((err) => {
        res.send(err)
    })
})





router.put('/address_update/:customer_id', (req, res) => {
    var customer_id = req.params.customer_id
    var token = req.headers.cookie.split(" ")
    console.log(token)
    token = token[token.length - 1].slice(0, -10)
    console.log(token)
    jwt.verify(token, 'rashmi', (err, data) => {
        if (!err) {
            console.log(data)
            var updatedData = {
                address_1: req.body.address_1,
                city: req.body.city,
                region: req.body.region,
                postal_code: req.body.postal_code,
                country: req.body.country,
                shipping_region_id: req.body.shipping_region_id
            }
            console.log()
            queries.updateAddress(updatedData, customer_id)
                .then(() => {
                    res.send('updated')
                }).catch((err) => {
                    res.send(err)
                    console.log(err)
                })
        } else {
            console.log(err)
            res.send(err.message)


        }
    })
})

router.put('/creditCard_update/:customer_id', (req, res) => {
    var customer_id = req.params.customer_id
    var token = req.headers.cookie.split(" ")
    console.log(token)
    token = token[token.length - 1].slice(0, -10)
    console.log(token)
    jwt.verify(token, 'rashmi', (err, data) => {
        if (!err) {
            console.log(data)
            var updatedData = {
                credit_card: req.body.credit_card
            }
            console.log()
            queries.updateCreditCard(updatedData, customer_id)
                .then(() => {
                    res.send('updated')
                }).catch((err) => {
                    res.send(err)
                    console.log(err)
                })
        } else {
            console.log(err)
            res.send(err.message)
        }
    })
})



module.exports = router