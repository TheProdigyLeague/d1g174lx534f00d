const mainRouter = require('express').Router();
const mainController = require('../../controllers/mainController/mainController');

mainRouter.route('/')
          .get(mainController.index)


module.exports = mainRouter
