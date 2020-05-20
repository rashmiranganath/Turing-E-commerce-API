const knex = require('../connection/mysql')

let checkCardId = (cartId) => {
    console.log(cartId)
    return knex.select("*").from("shopping_cart").havingIn("cart_id", cartId)
} 

let postData = (data) => {
    console.log(data)
    return knex('shopping_cart').insert(data)
}

let getByCartId = (cartId) => {
  return knex.select('*').from('shopping_cart').where('cart_id' , cartId)
}

let editDataByItemId = (itemId , data ) => {
  console.log(data)
  return knex("shopping_cart")
  .where('item_id' , itemId)
  .update({
    quantity : data.quantity
  })
}

let deleteCart = (cartId) => {
  return knex('shopping_cart').where('cart_id', cartId).del()
}

let getDataByItemId = (itemId) => {
  return knex.select('*').from('shopping_cart').where('item_id' , itemId)
}

let postToMoveCart = (data) => {
  console.log("hehe")
  return knex('moveToCart').insert(data)
}



module.exports = {checkCardId ,postData ,getByCartId ,editDataByItemId ,deleteCart , getDataByItemId , postToMoveCart}