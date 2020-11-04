const inquirer = require("inquirer");

function noSpace(str) {
    if (str.length > 1) {
        str = str.split(" ")
        for (let i = 1; i < str.length; i++) {
            let strArr = str[i].split("")
            strArr[0] = strArr[0].toUpperCase()
            str[i] = strArr.join("")
        }
        str = str.join("")
    }
    return str
}

async function createAnswer(questions) {
    //async strategy for reusing previous answer as a default from https://stackoverflow.com/questions/49520423/
    const ans1 = await inquirer.prompt([{
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    }]);
    const ans2 = await inquirer.prompt([{
            type: "input",
            message: "What is the GitHub Repository for this project named?",
            default: noSpace(ans1.title),
            name: "repo",
        },
        ...questions
    ]);
    return {
        ...ans1,
        ...ans2
    };
    // })
}

function pickLicense(data) {
    switch (data.license) {
        case "MIT":
            data.licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            data.license = "This project uses the MIT license. For more details, visit [this link](https://choosealicense.com/licenses/mit/)."
            break;
        case "ISC":
            data.licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
            data.license = "This project uses the ISC license. For more details, visit [this link](https://opensource.org/licenses/ISC)."
            break;
        case "GNU GPL":
            data.licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)"
            data.license = "This project uses the GNU GPL 3.0 license. For more details, visit [this link](https://www.gnu.org/licenses/gpl-3.0.html)."
            break;
        case "Apache":
            data.licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            data.license = "This project uses the Apache license. For more details, visit [this link](https://opensource.org/licenses/Apache-2.0)."
            break;
        case "IBM":
            data.licenseBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
            data.license = "This project uses the IBM license. For more details, visit [this link](https://opensource.org/licenses/IPL-1.0)."
            break;
        default:
            break;
    }
    return data
}

module.exports = {
    createAnswer: createAnswer,
    pickLicense: pickLicense
};