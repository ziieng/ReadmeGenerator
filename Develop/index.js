const fs = require("fs")
const generator = require("./utils/generateMarkdown")
const collect = require("./utils/collectData")


// function to write README file
function writeToFile(fileName, data) {
    const md = generator(data)
    fs.writeFileSync(fileName, md)
}

// function to initialize program
async function init() {
    let responses = await collect.createAnswer(questions) //.catch((err) => console.log(err))
    let data = collect.pickLicense(responses)
    writeToFile(data.fileName, data, (err) => console.log(err))
    console.log(data.fileName + " successfully generated!")
}

// array of questions for user
// the title of the repo is collected inside createAnswer, not needed in question array
const questions = [{
        type: "input",
        message: "Please describe your project.",
        name: "description",
            validate: (input) => (input == "") ? false : true
    },
    {
        type: "list",
        message: "Which license should your project use?",
        name: "license",
        choices: [
            "MIT",
            "ISC",
            "GNU GPL",
            "Apache",
            "IBM"
        ]
    },
    {
        type: "input",
        message: "What command should be used to install dependencies?",
        name: "install",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be used to run your tests?",
        name: "tests",
        default: "npm test"
    },
    {
        type: "input",
        message: "What else does a user need to know about using your repo?",
        name: "usage",
            validate: (input) => (input == "") ? false : true
    },
    {
        type: "input",
        message: "What guidelines do you have for others wanting to contribute to this repo?",
        name: "contributing",
            validate: (input) => (input == "") ? false : true
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
            validate: (input) => (input == "") ? false : true
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate: function (email) {
            //test from https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                return true;
            } else {
                console.log(".  Please enter a valid email address")
                return false;
            }
        }
    },
    {
        message: "What should your file be named?",
        name: "fileName",
        type: "input",
        default: "README.md",
        validate: (input) => (input == "") ? false : true
    }
];

// function call to initialize program
init();