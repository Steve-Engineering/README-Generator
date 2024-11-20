// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: function(input) {
            if (input.trim() === '') {
              return 'A project title is required. Please provide a title.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of the project.',
        validate: function(input) {
            if (input.trim() === '') {
              return 'A project description is required. Please provide a description.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the steps to install this project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide examples for use.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: ['MIT', 'GPL v3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide guidelines on how to contribute to the project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions.',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("README file created successfully!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            writeToFile("./utils/README.md", generateMarkdown({...responses}));
        });
}

// Function call to initialize app
init();
