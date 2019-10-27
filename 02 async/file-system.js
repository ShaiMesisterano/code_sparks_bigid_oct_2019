const fs = require('fs');

function readFile(filename, cb) {
    fs.readFile(filename, 'utf-8', function (error, content) {
        if (error) console.error(error);

        console.log("File content", content);
        cb();
    });
    // const content = fs.readFileSync(filename, 'utf-8');
    // console.log("File Content", content);
    // console.log("end");
}

function writeFile(filename, content, cb) {
    fs.writeFile(filename, content, function () {
        cb();
    });
}

module.exports = {
    readFile
};