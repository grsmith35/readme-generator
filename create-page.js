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
![alt text](assets/images/free.png)
        `
    }
    else if (license === 'Standard') {
        return `
![alt text](assets/images/standard.png)
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