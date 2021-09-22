//code to create the read me

const createToc = toc => {
    if(!toc) {
        return '';
    }
    return `
        ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [Credits](#credits)
        * [License](#license)
    `
};


module.exports = pageData => {
    const {title, description, installation, usage, contribution, tests, toc} = pageData;

    return `
    # ${title}
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