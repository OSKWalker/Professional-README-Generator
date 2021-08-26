// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Briefly describe your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What is the command to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "How does the user utilize this repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can the user contribute to the repo?",
  },
  {
    type: "input",
    name: "test",
    message: "What is the command for running tests?",
    default: "npm test",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a License for your projecet?",
    choices: [
      "APACHE 2.0",
      "BSD 3",
      "Eclipse",
      "GPL 3.0",
      "IBM",
      "MIT",
      "Mozilla",
      "Perl",
      "No License",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
  },
  ,
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
