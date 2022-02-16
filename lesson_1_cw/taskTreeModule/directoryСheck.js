const fs = require('fs');
const path = require('path');


const directoryCheck = (folderPath) => {
    fs.readdir(folderPath, (error, data) => {
        if (error) throw error;

        data.forEach(item => {
            const itemPath = path.join(folderPath, `${item}`);

            fs.stat(itemPath, (err, stats) => {
                if (err) throw err;

                if (stats.isFile()) {
                    fs.truncate(itemPath, err => {
                        if (err) throw err;
                        console.log(`Файл ${item} очищено`);
                    });
                } else {
                    const newNamePath = path.join(folderPath, `_new${item[0].toUpperCase()}${item.substr(1)}`);
                    fs.rename(itemPath, newNamePath, err => {
                        if (err) throw err;
                        console.log(`До папки ${item} доданий префікс _new`);
                    });
                }
            });
        });
    });
}

module.exports = {directoryCheck};