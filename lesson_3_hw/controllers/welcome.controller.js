const users = require('../db/users');

module.exports = {
    renderWelcome({params: {id}}, res) {
        const user = users.find(user => user.id === id);

        if (!user) {
            res.render('notFound');
            return;
        }

        res.render('welcome', user);
    }
};
