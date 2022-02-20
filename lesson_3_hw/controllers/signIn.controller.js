const users = require('../db/users');

module.exports = {
    renderSignIn(req, res) {
        res.render('signIn');
    },
    renderWelcome({body: {email}}, res) {
        const user = users.find(user => user.email === email);
        res.redirect(`/welcome/${user.id}`);
    }
};

