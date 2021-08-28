// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "No License") {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "No License") {
    return `[License](#license)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No License") {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 
>
>> - [Installation](#installation)
>
>> - [Usage](#usage)
>
>> - ${renderLicenseLink(data.license)}
>
>> - [Contributing](#contributing)
>
>> - [Test(s)](#test(s))
>
>> - [Questions](#questions)
>
## Installation

To install dependencies, utilize the following command:

${data.installation}

${data.instructions}


## Usage

${data.usage}

![Usage-Example](./assets/images/${data.example}?raw=true "Usage-Example")

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, utilize the following command:

${data.test}


## Questions

Any questions or concerns about the repo can be directed to me at ${
    data.email
  }. Visit [${data.github}](https://github.com/${
    data.github
  }/) if you are interested in seeing more of my projects.
`;
}

module.exports = generateMarkdown;
