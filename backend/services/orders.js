const Order = require('../models/order')

const getAll = (order) => Order.find({})
const create = (order) => Order.create(order)
const read = (id) => Order.findById(id)
const update = ({_id, ...rest}) => Order.update({_id}, rest)
const remove = (id) => Order.findByIdAndDelete(id)

module.exports = {
    getAll,
    create,
    read,
    update,
    remove
}