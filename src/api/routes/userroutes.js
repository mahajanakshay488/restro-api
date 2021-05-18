const router = require('express').Router();

const {
    HomepageController,
    SignupController,
    SigninController
} = require('../controllers/usercontroller');


/**
 * @route /user
 * @desc test route
 * @access Public
 */
router.get('/', HomepageController);

/**
 * @route /user/signup
 * @desc signup user
 * @access Public
 */
router.post('/signup', SignupController);

/**
 * @route /user/signin
 * @desc signin user
 * @access Public
 */
 router.post('/signin', SigninController);


module.exports = router;