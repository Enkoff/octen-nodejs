const fs = require('fs');
const path = require('path');

const {directoryCheck} = require('./directoryСheck');

const addData = (folderPath) => {
    const dataPath = path.join(folderPath, 'main');

    fs.mkdir(dataPath, {recursive: true}, err => {
        if (err) throw err;
        console.log('Папка main створена');

        const filePAth = path.join(folderPath, 'main.txt');

        fs.writeFile(filePAth, 'test', err => {
            if (err) throw err;
            console.log(`Файл main.txt успішно створено`);

            directoryCheck(folderPath);
        });
    });
};

module.exports = {addData};