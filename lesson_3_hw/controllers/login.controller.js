const users = require('../db/users');

module.exports = {
    renderLogin(req, res) {
        res.render('login');
    },
    createUser({body}, res) {
        const id = `${new Date().getTime()}`;
        users.push({...body, id});

        res.redirect('/users');
    }
};