// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.licenseBadge}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  To install app dependencies, run this command in your terminal:
  \`\`\`
  ${data.install}
  \`\`\`

  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  To launch the tests, run this command in your terminal:
  \`\`\`
  ${data.tests}
  \`\`\` 
  
  ## Questions
  If you have questions to ask or issues to report, please visit the [GitHub repository](https://github.com/${data.github}/${data.repo}) for this project, [my GitHub profile](https://github.com/${data.github}), or send me an email at ${data.email}.

`;
}

module.exports = generateMarkdown;
