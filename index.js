// DEPENDENCIES
const fs = require('fs'); // Files system
const inquirer = require('inquirer'); // inquirer npm
const fileName = 'README-template.md';
const questionList = [
    {
        type: 'input',
        message: 'What is your project called?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What does your application do?',
        name: 'func',
    },
    {
        type: 'input',
        message: 'What is the purpose of the repository?',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'Where is the file location of the demo video?',
        name: 'demo',
    },
    {
        type: 'input',
        message: 'How can somebody send feedback for the application?',
        name: 'feedback',
    },
]

// Inquires using command terminal
inquirer
    .prompt(questionList)
    .then(createFile)
    .catch(error => {
        if(error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

// Take user input to creat README
function createFile({title, func, repo, demo, feedback}) {
    const fileContent = `# ${title}
    
## Function

${func}

## Repository

${repo}

## DEMO

![plot](${demo})

## Feedback

${feedback}
    `
    fs.writeFile(fileName, fileContent, (err) =>
        err ? console.error(err) : console.log('File created')
    );
}

