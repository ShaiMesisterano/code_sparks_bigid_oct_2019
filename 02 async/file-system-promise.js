const fs = require('fs');

function readFile(filename) {
    return new Promise( function(resolve, reject){
        console.log("Active");
        fs.readFile(filename, 'utf-8', function (error, content) {
            if (error) reject(error);

            resolve(content);
        })
    } )
}

module.exports = {
    readFile
};