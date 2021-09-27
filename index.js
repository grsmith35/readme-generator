const inquirer = require("inquirer");
const {writeFile} = require('./write-page')
const createReadme = require('./create-page')

const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your projects name?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your project Name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a description of your project.',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                }
                else {
                    console.log("Please give a valid description of your project.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How can this project be installed?',
            validate: installInput => {
                if(installInput) {
                    return true;
                }
                else {
                    console.log("Please give install instructions for this project.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe fair usage of this project.',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                }
                else {
                    console.log("Please describe fair usage of this project.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to this project?',
            validate: contributionInput => {
                if(contributionInput) {
                    return true;
                }
                else {
                    console.log("Please give credit where credit is due!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please describe how to test this project',
            validate: testInput => {
                if(testInput) {
                    return true;
                }
                else {
                    console.log("Please explain like im 5!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username',
            validate: gitInput => {
                if(gitInput) {
                    return true;
                }
                else {
                    console.log("Please enter your github username!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter best email to contact',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                }
                else {
                    console.log("Please enter your email address!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which type of license do you need?',
            choices: ['Free', 'Standard', 'Pro'],
            validate: licInput => {
                if(licInput) {
                    return true;
                }
                else {
                    console.log("Please select a license type!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'toc',
            message: 'Would you like to include a table of contents?',
            default: true
        },
    ])
}

promptUser()
.then(readmeData => {
    return createReadme(readmeData);
})
.then(readmeContents => {
    return writeFile(readmeContents);
});