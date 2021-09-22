const fs = require('fs');

//write readme page
const writeFile = readmeContents => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readme.md', readmeContents, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = {writeFile};