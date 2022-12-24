const express = require("express");
const router = express.Router();
const passport = require('passport');
const {home} = require("./controllers/home");
const { addProduct,getAllProduct,getProduct,getUserProduct, buyProduct, getPurchasedProducts } = require("./controllers/products");
const {register,login, getUser} = require("./controllers/user")


router.get('/', home)

router.post('/register',register)
router.post('/login',login)
router.get('/getUser',passport.authenticate('jwt', { session:false }),getUser)

router.post('/addProduct',passport.authenticate('jwt', { session:false }),addProduct)
router.get('/getAllProduct',getAllProduct)
router.get('/getUserProduct',passport.authenticate('jwt', { session:false }),getUserProduct)
router.get('/buyProduct/:pId',passport.authenticate('jwt', { session:false }),buyProduct)
router.get('/getPurchasedProducts/',passport.authenticate('jwt', { session:false }),getPurchasedProducts)
router.get('/getProduct/:id',getProduct)

router.get('*', (req, res) => {
    res.status(404).json({
        message: 'Page Not Found',
        success:false
    });
});

module.exports = router;