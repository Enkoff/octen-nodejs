const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

const users = [];

let error = {
    email: '',
    password: ''
};

app.get('/login', (req, res) => {
    error.email = '';
    error.password = '';

    res.render('login', error);
});

app.post('/login', ({body}, res) => {
        const isEmailExist = users.some(user => user.email === body.email);

        if (!body.email && !body.password) {
            error.email = 'This field is required';
            error.password = 'This field is required';

            res.render('login', error);
            return;
        }

        if (!body.email) {
            error.email = 'This field is required';
            error.password = '';

            res.render('login', error);
            return;
        }

        if (!body.password) {
            error.email = '';
            error.password = 'This field is required';

            res.render('login', error);
            return;
        }

        if (isEmailExist) {
            error.email = 'This email address exist';
            error.password = '';

            res.render('login', error);
            return;
        }

        if (body.password.length < 5) {
            error.email = '';
            error.password = 'Password must be at least 6 characters';

            res.render('login', error);
            return;
        }

        const id = `${new Date().getTime()}`;
        users.push({...body, id});

        res.redirect('/users');
    }
)
;

app.get('/users', ({query}, res) => {
    if (Object.keys(query).length) {
        let usersFilter = [...users];

        if (query.city) {
            usersFilter = usersFilter.filter(user => user.city.toLowerCase() === query.city.toLowerCase())
        }
        if (query.age) {
            usersFilter = usersFilter.filter(user => user.age === query.age)
        }
        if (query.email) {
            usersFilter = usersFilter.filter(user => user.email === query.email)
        }

        res.render('users', {users: usersFilter});
        return;
    }

    res.render('users', {users});
});

app.get('/users/:id', ({params: {id}}, res) => {
    const user = users.find(user => user.id === id);

    if (!user) {
        res.render('notFound');
        return;
    }


    res.render('userInfo', user);
});

app.use((req, res) => {
    res.render('notFound');
});

app.listen(5200, () => {
    console.log('Server 5200 has started');
});