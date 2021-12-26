// TODO: Include packages needed for this application
let inquirer = require("inquirer"); 
let fs = require("fs");
let path = require("path");
let generateMD = require("./utils/generateMarkdown");
//const inquirer = require("inquirer");
//const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: " provide project title"
    },
    {
        type: "input",
        name: "description",
        message: "provide project description"
    },
    {
        type: "input",
        name: "email",
        message: "provide email for contact information"
    }, 
    {
        type: "input",
        name: "github",
        message: "provide github"
    }, 
    {
        type: "list",
        name: "license",
        message: "choose license",
        choices: ["BSD 3.0", "MIT", "APACHE 2.0", "GPL 3.0", "NONE"]
    }, 
    {
        type: "input",
        name: "installation",
        message: "provide instalation instruction"
    }, 
    {
        type: "input",
        name: "usage",
        message: "provide instruction for usage"
    }, 
    {
        type: "input",
        name: "tests",
        message: "provide how to run test"
    }, 
    {
        type: "input",
        name: "contributing",
        message: "provide instruction on how to contribute"
    }

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions).then(response => {
        writeToFile("generatedReadMe.md", generateMD({ ...response}));
    });
}

// Function call to initialize app
init();
