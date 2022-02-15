const createFileData = (data) => {
    let fileData = '';

    data.forEach(({name, age, city}, index) => {
        fileData += `${index + 1}) name:${name} age:${age} city:${city}\n`;
    });

    return fileData;
};

module.exports = {createFileData};