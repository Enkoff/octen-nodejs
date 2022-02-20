const {Router} = require('express');

const {loginController: {renderLogin, createUser}} = require('../controllers');
const {userMiddleware: {isUserDataValid, isEmailExist}} = require('../middleware');

const logInRouter = Router();

logInRouter.get('/', renderLogin);
logInRouter.post('/', isUserDataValid, isEmailExist, createUser);

module.exports = logInRouter;