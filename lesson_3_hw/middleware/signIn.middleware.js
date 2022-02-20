module.exports = {
    isFieldDataValid: ({body: {email, password}}, res, next) => {
        try {
            if (!email || !password) throw new Error('login or password is not provided');
            if (password.length < 6) throw new Error('Not valid password');

            next();
        } catch ({message}) {
            console.log(message);
            res.status(400).send(message);
        }
    }
};