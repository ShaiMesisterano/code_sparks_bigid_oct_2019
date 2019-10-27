const fs = require('fs');

function readFile(filename){
    const stream = fs.createReadStream(filename)
    stream.on('data', function (buffer) {
        console.log(buffer);
    }).on('end', function () {
        console.log('end');
    })
}

module.exports = {
    readFile
}