// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Provide the title of the project(Required): ",
    name: "title",
    validate: (titleinput) => {
      if (titleinput) {
        return true;
      } else {
        console.log("You must provide a project title.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "user",
    message: "Provide your Github username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Provide an email address for questions/feedback: ",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a detailed description of your project: ",
  },
  {
    type: "checkbox",
    name: "language",
    message: "What programming tech did you use?",
    choices: ["HTML", "CSS", "JavaScript", "Node.js", "Bootstrap"],
  },
  {
    type: "input",
    name: "installation",
    message: "Provide instructions on installation/dependencies: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide how a user would use your program: ",
  },
  {
    type: "list",
    name: "license",
    message: "What license did you use?",
    choices: ["MIT", "Apache 2.0", "GNU", "ISC", "None"],
  },
  {
    type: "input",
    name: "contribute",
    message: "Are you allowing others to contribute?",
  },
  {
    type: "input",
    name: "test",
    message: "Would you like to write tests for your application?",
  },
  {
    type: "list",
    name: "question",
    message: "How would you like users to ask questions?",
    choices: ["open an issue", "email me", "kick rocks", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("Hooplah!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
