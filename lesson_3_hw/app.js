const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');

const routes = require('./routes/api.router');

const app = express();

// Default setup
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

// Engine setup
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

// Routes setup
app.use(routes);

app.listen(5200, () => {
    console.log('Server 5200 has started');
});