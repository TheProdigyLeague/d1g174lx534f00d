const userRouter = require('express').Router();
const userControllerTwo = require('../../controllers/userControllers/userControllerTwo');


userRouter.route('/user/:username')
          .get(userControllerTwo.index)

module.exports = userRouter
