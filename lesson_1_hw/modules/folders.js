const inPersonUsers = [
    {name: 'Andri', age: 22, city: 'Lviv'},
    {name: 'Oleh', age: 29, city: 'Malin'}
];

const onlineUsers = [
    {name: 'Sergiy', age: 28, city: 'Kiev'},
    {name: 'Ivan', age: 29, city: 'Bucha'}
];

const folders = [
    {
        name: 'online',
        data: onlineUsers
    },
    {
        name: 'inPerson',
        data: inPersonUsers
    }
];

module.exports = {folders};