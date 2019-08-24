const User = require('../models/user')

const getAll = (user) => User.find({})
const create = (user) => User.create(user)
const read = (id) => User.findById(id)
const update = ({_id, ...rest}) => User.update({_id}, rest)
const remove = (id) => User.findByIdAndDelete(id)

module.exports = {
    getAll,
    create,
    read,
    update,
    remove
}