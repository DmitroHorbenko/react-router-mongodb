const categoriesService = require('../services/categories')

async function getAll (req, res, next) {
    try {
        const categories = await categoriesService.getAll()
        res.json(categories)
    } catch (e) {
        next(e)
    }
}

async function create (req, res, next) {
    try {
        const category = await categoriesService.create(req.body)
        res.json(category)
    } catch (e) {
        next(e)
    }
}

async function read (req, res, next) {
    try {
        const category = await categoriesService.read(req.params.id);
        res.json ( category )
    } catch (e) {
        next(e)
    }
}

async function update(req, res, next) {
    try {
        const data = await categoriesService.update(req.body)
        res.json(data)
    } catch (e) {
        next(e)
    }
}

async function remove(req, res, next) {
    try {
        const category = await categoriesService.remove(req.params.id);
        res.json ( category )
    } catch (e) {
        next(e)
    }
}

module.exports = {
    getAll,
    create,
    update,
    read,
    remove
}