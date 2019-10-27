const fs = require('fs');

function readFile(filename) {
    fs.readFile(filename, 'utf-8', function (error, content) {
        if (error) console.error(error);

        console.log("File content", content);
    });
    console.log("end");
}

readFile('output.txt');