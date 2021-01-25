const router=require('express').Router();
const userController = require('../controllers/userControllers');


/**
 * Api For User Post
 * Parameter<Body>:name(*),age(*),
 * Method:POST
 */
router.post('/userPost',
    userController.PostUserData
)
/**
 * Api For User Get
 * Method:GET
 */
router.get('/userPost/get',
    userController.UserGet
)
/**
 * Api For User Get
 * Method:GET
 */
router.put('/userPost/put',
    userController.UpdateUser
)



//export modules
module.exports = router

