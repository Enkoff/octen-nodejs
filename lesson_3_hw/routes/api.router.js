const {Router} = require('express');

const {
    welcomeRouter,
    signInRouter,
    userRouter,
    loginRouter,
} = require('./index');

const routes = Router();

routes.use('/welcome', welcomeRouter);
routes.use('/login', loginRouter);
routes.use('/signIn', signInRouter);
routes.use('/users', userRouter);

routes.use((req, res) => {
    res.render('notFound');
});

module.exports = routes;