// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU") {
    badge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "ISC") {
    badge =
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else {
    badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "https://www.mit.edu/~amini/LICENSE.md";
  } else if (license === "Apache 2.0") {
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
  } else if (license === "GNU") {
    licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
  } else if (license === "ISC") {
    licenseLink = "https://choosealicense.com/licenses/isc/";
  } else license === "None";
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "";
  } else {
    licenseSection = `License: ${license}`;
  }
  return licenseSection;
}

// Function to handle question response
function contactOwner(question) {
  let contactme = "";
  if (question === "open an issue") {
    contactme =
      "https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue";
  } else if (question === "email me") {
    contactme = email;
  } else if (question === "kick rocks") {
    contactme = "they can kick rocks";
  } else question === "None";
  return contactme;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}

  # Description
  ${data.description}
  ### Tech used in program: ${data.language}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Feedback & QA](#questions)
  * [Tests](*test)
  # Installation
  The following necessary dependencies must be installed to successfully run the application: ${
    data.installation
  }
  # Usage
  In order to use this app, ${data.usage}
  # Contributing
  Contributing is ${data.contribute}
  # License
  This project is licensed under the ${data.license} license.
  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}
  # Feedback & QA
  If you have any questions or feedback regarding the repo, ${contactOwner(
    data.question
  )}.
  Patrick Poopathi's Github repo link: https://github.com/${data.user}

`;
}

module.exports = generateMarkdown;
