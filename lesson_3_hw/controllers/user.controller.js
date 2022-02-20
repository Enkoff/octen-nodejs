const users = require('../db/users');

module.exports = {
    getAllUsers({query}, res) {
        if (Object.keys(query).length) {
            let usersFilter = [...users];

            if (query.city) {
                usersFilter = usersFilter.filter(user => user.city.toLowerCase() === query.city.toLowerCase());
            }
            if (query.age) {
                usersFilter = usersFilter.filter(user => user.age === query.age);
            }
            if (query.email) {
                usersFilter = usersFilter.filter(user => user.email === query.email);
            }

            res.render('users', {users: usersFilter});
            return;
        }

        res.render('users', {users});
    },
    getUserById({params: {id}}, res) {
        console.log(id);
        const user = users.find(user => user.id === id);

        if (!user) {
            res.render('notFound');
            return;
        }

        res.render('userInfo', user);
    },
    deleteUserById({params: {id}}, res) {
        const userIndex = users.findIndex(user => user.id === id);
        delete (users[userIndex]);

        res.redirect('/users');
    }
};