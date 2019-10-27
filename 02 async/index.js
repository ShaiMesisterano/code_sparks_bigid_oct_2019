// const fileSystem = require('./file-system');
// const fileSystemPromise = require('./file-system-promise');

const fileSystemStream = require('./file-system-stream');

// fileSystem.readFile('big-file.zip', function () {
//     fileSystem.writeFile('small-file.txt', 'some text', function () {
//         console.log("End of writing file");
//     });
// });

// const result = fileSystemPromise.readFile('big-file.zip')
//     .then( function (content) {
//         console.log('File Content', content);
//     })
//     .catch(function (error) {
//         console.error('Error', error);
//     });

fileSystemStream.readFile('big-file.zip');