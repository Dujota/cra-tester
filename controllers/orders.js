// import the Order Model. I'm calling this OrderModel for clarity, but typically this variable is called Order
const OrderModel = require('../models/order.js');

module.exports = {
    create,
    index
}

async function create(req, res) {
    try {
        // 1. put the order in the database (the data will be incoming via `req.body`)
        await OrderModel.create({ item: req.body.item })
        // 2. send a response to frontend - typically we send back the newly created order, or all the list of orders, or just an 'ok'
        res.status(200).json('ok. Order added to DB!')
    } catch (err) {
        res.json(err);
    }
}

async function index(req, res) {
    try {
       const orders =  await OrderModel.find({})
        res.status(200).json({orders})
    } catch (error) {
        res.json(err);
    }
}