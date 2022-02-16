const fs = require('fs');
const path = require('path');

const {addData} = require('./taskTreeModule/addData');

// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так

// const taskOnePath = path.join(__dirname, 'taskOne.txt');
//
// fs.writeFile(taskOnePath, 'test data', err => {
//     if (err) throw err;
//     console.log(`Файл taskOne успішно створено`);
//
//     fs.readFile(taskOnePath, 'utf-8',(err, data) => {
//         if (err) throw err;
//         console.log('Читаю файл taskOne');
//
//         const taskOneNewFilePath = path.join(__dirname, 'taskOneNewFile.txt');
//
//         fs.writeFile(taskOneNewFilePath, `${data}`, err => {
//             if (err) throw err;
//             console.log('Данні записані в новий файл з назвою taskOneNewFile.txt');
//         });
//     });
// });

// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell

// const filePath = path.join(__dirname, 'taskTwo.txt');
//
// fs.writeFile(filePath, 'test data', err => {
//     if (err) throw err;
//     console.log('Файл taskTwo.txt успішно створено');
//
//     fs.readFile(filePath, 'utf-8', (err, data) => {
//         if (err) throw err;
//         console.log('Читаю файл taskTwo.txt');
//
//         const taskTwoFolderPath = path.join(__dirname, 'taskTwo');
//
//         fs.mkdir(taskTwoFolderPath, {recursive: true}, err => {
//             if (err) throw err;
//             console.log(`Папку taskTwo успішно створено`);
//
//             const taskTwoFilePath = path.join(__dirname, 'newTaskTwo.txt');
//
//             fs.writeFile(taskTwoFilePath, data, err => {
//                 if (err) throw err;
//                 console.log('Файл newTaskTwo.txt успішно створено та записано данні з файлу taskTwo.txt');
//
//                 fs.unlink(filePath, error => {
//                     if (error) throw error;
//                     console.log('Файл taskTwo.txt видалено');
//                 })
//             });
//         });
//     });
// });

// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

// const taskThreeFolderPath = path.join(__dirname, 'taskThree');
//
// fs.mkdir(taskThreeFolderPath, {recursive: true}, err => {
//    if (err) throw err
//     console.log('Папка taskThree створена');
//
//     addData(taskThreeFolderPath);
// });
