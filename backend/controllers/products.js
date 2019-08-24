const  productService = require('../services/products')

async function getAll(req, res) {
    const data = await productService.getAll()
    res.json(data)
}

async function create(req, res, next) {
    try {
        const data = await productService.create(req.body)
        res.json(data)
    } catch (e) {
        next(e)
    }
}


async function read (req, res, next) {
    try {
        const data = await productService.read(req.params.id);
        res.json ( data )
    } catch (e) {
        next(e)
    }
}


async function update(req, res, next) {
    try {
        const data = await productService.update(req.body)
        res.json(data)
    } catch (e) {
        next(e)
    }
}

async function remove(req, res, next) {
    try {
        const data = await productService.remove(req.params.id);
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

