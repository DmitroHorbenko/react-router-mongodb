const Category = require('../models/category')

const getAll = () => Category.find({})
const create = (category) => Category.create(category)
const read = (id) => Category.findById(id)
const update = ({_id, ...rest}) => Category.update({_id}, rest)
const remove = (id) => Category.findByIdAndDelete(id)

module.exports = {
    getAll,
    create,
    update,
    read,
    remove
}