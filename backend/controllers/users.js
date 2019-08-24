const  userService = require('../services/users')

async function getAll(req, res) {
    const data = await userService.getAll()
    res.json(data)
}

async function create(req, res, next) {
    try {
        const data = await userService.create(req.body)
        res.json(data)
    } catch (e) {
        next(e)
    }
}


async function read (req, res, next) {
    try {
        const data = await userService.read(req.params.id);
        res.json ( data )
    } catch (e) {
        next(e)
    }
}


async function update(req, res, next) {
    try {
        const data = await userService.update(req.body)
        res.json(data)
    } catch (e) {
        next(e)
    }
}

async function remove(req, res, next) {
    try {
        const data = await userService.remove(req.params.id);
        res.json ( data )
    } catch (e) {
        next(e)
    }
}

module.exports = {
    getAll,
    create,
    read,
    update,
    remove
}

