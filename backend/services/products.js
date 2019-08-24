const Product = require('../models/product')

const getAll = (product) => Product.find({})
const create = (product) => Product.create(product)
const read = (id) => Product.findById(id)
const update = ({_id, ...rest}) => Product.update({_id}, rest)
const remove = (id) => Product.findByIdAndDelete(id)

module.exports = {
    getAll,
    create,
    read,
    update,
    remove
}