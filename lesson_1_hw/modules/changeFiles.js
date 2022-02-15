const fs = require('fs');

const changeFiles = (tmpPath) => {
    fs.readFile(tmpPath, 'utf8', (error, data) => {
        const tmpOnlineData = data.split('|')[0];
        const tmpOnlinePath = data.split('|')[1];

        const tmpInPersonData = data.split('|')[2];
        const tmpInPersonPath = data.split('|')[3];


        fs.appendFile(tmpOnlinePath, tmpInPersonData,  {flag: 'w'}, error => {
            if (error) throw error
            fs.appendFile(tmpInPersonPath, tmpOnlineData,  {flag: 'w'}, error => {
                if (error) throw error
                console.log('Данні в файлах перезаписані');
                fs.unlink(tmpPath, error => {
                    if (error) throw error;
                    console.log('Файл tmp видалено');
                })
            });
        });
    });
};

module.exports = {changeFiles};