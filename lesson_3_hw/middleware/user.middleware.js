const users = require('../db/users');

module.exports = {
    isUserFound: ({body: {email, password}}, res, next) => {
        try {
            const user = users.find(user => user.email === email && user.password === password);
            if (!user) throw new Error('User not found');

            next();
        } catch ({message}) {
            console.log(message);
            res.status(400).send(message);
        }
    },
    isUserDataValid: ({body: {firstName, lastName, email, password, age, city}}, res, next) => {
        try {
            if (!firstName || !lastName || !email || !password || !age || !city) throw new Error('All fields are required');
            if (password.length < 6) throw new Error('Not valid password min 6 char');

            next();
        } catch ({message}) {
            console.log(message);
            res.status(400).send(message);
        }
    },
    isEmailExist: ({body: {email}}, res, next) => {
        try {
            const userExist = users.some(user => user.email === email);
            if (userExist) throw new Error('User with this email exist');

            next();
        } catch ({message}) {
            console.log(message);
            res.status(400).send(message);
        }
    }
};