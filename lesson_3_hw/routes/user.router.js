const {Router} = require('express');

const {userController: {getAllUsers, getUserById, deleteUserById}} = require('../controllers');

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/:id', deleteUserById);

module.exports = userRouter;