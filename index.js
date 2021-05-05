// DEPENDENCIES
const fs = require('fs'); // Files system
const inquirer = require('inquirer'); // inquirer npm
const fileName = 'README-template.md';

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            message: 'What is your project called?',
            name: 'title',
        },
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
        const fileContent = `# ${answers.title}`
        fs.appendFile(fileName, fileContent, (err) =>
            err ? console.error(err) : console.log('Commit logged!')
        );
    })
    .catch(error => {
    if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
    });