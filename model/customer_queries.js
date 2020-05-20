const knex = require('../connection/mysql')



let customerUpdate = (customer_id, data) => {
    return knex('customer').where('customer_id', customer_id)
        .update({
            name: data.name,
            email: data.email,
            address_1: data.address_1,
            city: data.city,
            country: data.country,
            mob_phone: data.mob_phone,
            credit_card: data.credit_card
        })
}

let getCustomerById = (customer_id) => {
    return knex.select('*').from('customer').where('customer_id', customer_id)
}

let postCustomerData = (data) => {
    return knex('customer').insert(data)
}

let getSignInData = (email) => {
    return knex.select('*').from('customer').havingIn('email', email)
}

let updateAddress = (data, customer_id) => {
    return knex('customer')
        .where("customer_id", customer_id)
        .update({
            address_1: data.address_1,
            city: data.city,
            region: data.region,
            postal_code: data.postal_code,
            country: data.country,
            shipping_region_id: data.shipping_region_id
        })
}

let updateCreditCard = (data , customer_id) => {
    return knex('customer')
    .where("customer_id" , customer_id)
    .update({
        credit_card : data.credit_card
    })
}




module.exports = { customerUpdate, getCustomerById, postCustomerData, getSignInData, updateAddress ,updateCreditCard}
