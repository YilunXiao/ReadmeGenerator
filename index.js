// DEPENDENCIES
const fs = require('fs'); // Files system
const inquirer = require('inquirer'); // inquirer npm

inquirer
    .prompt([
        /* Pass your questions in here */
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
    })
    .catch(error => {
    if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
    });