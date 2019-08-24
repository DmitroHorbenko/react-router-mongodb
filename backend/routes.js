const express = require('express')
const router = express.Router();

const {
    getAll: getAllCategories,
    create: createCategory,
    update: updateCategory,
    read: findCategoryById,
    remove: deleteCategoryById } = require('./controllers/categories');

const {
    getAll: getAllProducts,
    create: createProduct,
    read: findProductById,
    update: updateProduct,
    remove: deleteProductById } = require('./controllers/products');

const {
    getAll: getAllUsers,
    create: createUser,
    read: findUserById,
    update: updateUser,
    remove: deleteUserById } = require('./controllers/users');

const {
    getAll: getAllOrders,
    create: createOrder,
    read: findOrderById,
    update: updateOrder,
    remove: deleteOrderById } = require('./controllers/orders');

router.get('/category', getAllCategories);
router.post('/category', createCategory);
router.get('/category/:id', findCategoryById);
router.put('/category', updateCategory);
router.delete('/category/:id', deleteCategoryById);


router.get('/product', getAllProducts);
router.post('/product', createProduct);
router.get('/product/:id', findProductById);
router.put('/product/', updateProduct);
router.delete('/product/:id', deleteProductById);

router.get('/user', getAllUsers);
router.post('/user', createUser);
router.get('/user/:id', findUserById);
router.put('/user/', updateUser);
router.delete('/user/:id', deleteUserById);

router.get('/order', getAllOrders);
router.post('/order', createOrder);
router.get('/order/:id', findOrderById);
router.put('/order/', updateOrder);
router.delete('/order/:id', deleteOrderById);

router.use('/api', router);

module.exports = router;