//code to create the read me

const createToc = toc => {
    if(!toc) {
        return '';
    }
    return `
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [License](#license-type)
    `
};

const checkLicense = license => {
    if(license === 'Free') {
        return `
![license type](https://github.com/grsmith35/readme-generator/blob/636350f9bb21e53437db789405d49f2d78168a5b/assets/images/free.png)
        `
    }
    else if (license === 'Standard') {
        return `
![alt text](assets/images/standardimg.PNG)
        `
    }
    else {
        return `
![alt text](assets/images/pro.png)
        `
    }
}


module.exports = pageData => {
    const {title, description, installation, usage, contribution, tests, license, toc} = pageData;

    return `
# ${title}
#License type
${checkLicense(license)}
## Description
${description}
${createToc(toc)}
## Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
## Tests
${tests}
    `
}