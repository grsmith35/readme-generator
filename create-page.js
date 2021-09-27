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
<img src="https://img.shields.io/static/v1?label=LICENSE&message=${license}&color=success" />
You have limited access to this repository. If you would like to upgrade please contact
![Riley Smith](https://github.com/grsmith35) .
        `
    }
    else if (license === 'Standard') {
        return `
<img src="https://img.shields.io/static/v1?label=LICENSE&message=${license}&color=success" />
        `
    }
    else {
        return `
<img src="https://img.shields.io/static/v1?label=LICENSE&message=${license}&color=success" />
        `
    }
}


module.exports = pageData => {
    const {title, description, installation, usage, contribution, tests, license, email, toc, github} = pageData;

    return `
# ${title}
## License type
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
## Github User
[Github profile](https://github.com/${github})
## Questions
If you have any questions on this code please reachout to me at ${email}.
    `
}