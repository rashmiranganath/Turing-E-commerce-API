var express = require('express');
var router = express.Router()
var queries = require('../model/shopping_cart_queries')
const Str = require('@supercharge/strings')




router.post('/postData', function (req, res) {
  random()
  function postDataAgain(random_CardId) {
    queries.checkCardId(random_CardId).then((res_data) => {
      console.log(res_data)
      if (res_data.length == 0) {
        data = {
          cart_id: random_CardId,
          product_id: req.body.product_id,
          attributes: req.body.attributes,
          quantity: req.body.quantity,
          added_on: new Date()
        }
        queries.postData(data).then((res_data) => {
          console.log(res_data)
          res.send(res_data)
        }).catch((err) => {
          console.log(err)
          res.send(err)
        })
      }
      else {
        random()
        postDataAgain(random_CardId)
      }

    }).catch((err) => {
      res.send(err)
    })
  }
  postDataAgain(random_CardId)

  function random() {
    console.log(random_CardId = Str.random(6))
    return random_CardId
  }
})

router.get('/getDataByCartId/:cartId' , function(req , res){
  cartId = req.params.cartId
  queries.getByCartId(cartId).then((res_data) => {
    res.send(res_data)
  }).catch((err) => {
    res.send(err)
  })
})

router.put('/editDataByItemId/:itemId' , function(req , res){
  itemId = req.params.itemId
  console.log(itemId)
  data = {
    quantity : req.body.quantity
  }
 queries.editDataByItemId(itemId,data).then(() => {
   res.sendStatus(200)
 }).catch(() => {
   res.sendStatus(400)
 })
})

router.delete('/deleteCart/:cartId' , function(req , res){
  cartId = req.params.cartId
  queries.deleteCart(cartId).then(() => {
    res.sendStatus(200)
  }).catch(() => {
    res.sendStatus(400)
  })
})



router.get('/moveToCart/:itemId' , function(req , res){
  itemId = req.params.itemId
  queries.getDataByItemId(itemId).then((res_data) => {
    data = {
      item_id: res_data[0]["item_id"] ,
      cart_id : res_data[0]["cart_id"],
      product_id: res_data[0]["product_id"],
      attributes: res_data[0]["attributes"],
      quantity: res_data[0]["quantity"],
      buy_now: res_data[0]["buy_now"],
      added_on: res_data[0][ "added_on"]
    }
    console.log(data)
    queries.postToMoveCart(data).then((response) => {
      console.log("yoyo")
      res.send(response)
    }).catch((err) => {
      res.send(err)
    })
  }).catch((err) => {
    res.send(err)
  })
})

router.get('/TotalAmount/:' , function(req , res){
  cart_id = req.params.cart_id
  
})


module.exports = router;