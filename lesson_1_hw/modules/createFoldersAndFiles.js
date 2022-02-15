const fs = require('fs');
const path = require('path');

const {createFile} = require('./createFile');
const {createFileData} = require('./createFileData');

const createFoldersAndFiles = (dirName, folders) => {
    const tmpPath = path.join(dirName, 'tmp.txt');

    fs.writeFile(tmpPath, '', err => {
        if (err) throw err;
        console.log(`Файл tmp успішно створено`);

        for (const {name, data} of folders) {
            const folderPath = path.join(dirName, 'main', `${name}`);

            fs.mkdir(folderPath, {recursive: true}, err => {
                if (err) throw err;
                console.log(`Папку ${name} успішно створено`);

                const filePath = path.join(dirName, 'main', `${name}`, `${name}.txt`);

                let fileData;
                if (name === 'online') {
                    fileData = `${createFileData(data)}|${filePath}|`;
                } else {
                    fileData = `${createFileData(data)}|${filePath}|`;
                }

                fs.appendFile(tmpPath, fileData, {flag: 'a'}, error => {
                    if (error) throw error;
                    createFile(filePath, name, data, tmpPath);
                });
            });
        }
    });
};

module.exports = {createFoldersAndFiles};

