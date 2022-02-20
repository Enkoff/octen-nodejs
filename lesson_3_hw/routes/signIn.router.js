const {Router} = require('express');

const {signInController: {renderSignIn, renderWelcome}} = require('../controllers');
const {signInMiddleware: {isFieldDataValid}, userMiddleware: {isUserFound}} = require('../middleware');

const signInRouter = Router();

signInRouter.get('/', renderSignIn);
signInRouter.post('/', isFieldDataValid, isUserFound, renderWelcome);

module.exports = signInRouter;