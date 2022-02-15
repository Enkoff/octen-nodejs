const fs = require('fs');

const {createFileData} = require('./createFileData');
const {changeFiles} = require('./changeFiles');

const createFile = (filePath, name, data, tmpPath) => {
    fs.writeFile(filePath, createFileData(data), err => {
        if (err) throw err;
        console.log(`Файл ${name} успішно створено`);

        if (name === 'inPerson') {
            changeFiles(tmpPath);
        }
    });
};

module.exports = {createFile};