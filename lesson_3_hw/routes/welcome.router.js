const {Router} = require('express');

const {welcomeController: {renderWelcome}} = require('../controllers');

const welcomeRouter = Router();

welcomeRouter.get('/:id', renderWelcome);

module.exports = welcomeRouter;