// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const docName = "README.md";

// TODO: Create an array of questions for user input
const questionnaire = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "Briefly describe your project.",
  },
  {
    name: "installation",
    type: "input",
    message: "What is the command to install dependencies for your project?",
    default: "npm i",
  },
  {
    name: "instructions",
    type: "input",
    message:
      "Provide step-by-step instructions to setup your development environment if necessary",
    default: "No other instructions.",
  },
  {
    name: "usage",
    type: "input",
    message: "How does the user utilize this repo?",
  },
  {
    name: "example",
    type: "input",
    message:
      "Include a screenshot as an example for use. (Enter image name and file type)",
    default: "",
  },
  {
    name: "contributing",
    type: "input",
    message: "How can the user make contributions to the repo?",
  },
  {
    name: "test",
    type: "input",
    message: "What is the command for running a test if there are any?",
    default: "npm test",
  },
  {
    name: "license",
    type: "list",
    message: "Choose a License for your project?",
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
    name: "github",
    type: "input",
    message: "Enter your GitHub username.",
  },
  {
    name: "email",
    type: "input",
    message: "Enter your email address.",
  },
];

// TODO: Create a function to write README file
function writeToFile(docName, data) {
  return fs.writeFileSync(path.join(process.cwd(), docName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questionnaire).then((userInputs) => {
    console.log("\nAnalyzing data...\nGenerating README...\n");
    writeToFile(docName, generateMarkdown({ ...userInputs }));
  });
}

// Function call to initialize app
init();
