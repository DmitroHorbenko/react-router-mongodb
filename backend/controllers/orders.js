const  orderService = require('../services/orders')

async function getAll(req, res) {
    const data = await orderService.getAll()
    res.json(data)
}

async function create(req, res, next) {
    try {
        const data = await orderService.create(req.body)
        res.json(data)
    } catch (e) {
        next(e)
    }
}


async function read (req, res, next) {
    try {
        const data = await orderService.read(req.params.id);
        res.json ( data )
    } catch (e) {
        next(e)
    }
}


async function update(req, res, next) {
    try {
        const data = await orderService.update(req.body)
        res.json(data)
    } catch (e) {
        next(e)
    }
}

async function remove(req, res, next) {
    try {
        const data = await orderService.remove(req.params.id);
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

