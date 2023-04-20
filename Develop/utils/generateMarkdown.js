const answers = require('../index.js');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  switch(license) {
    case null:
      license = '';
      break;
    case 'Apache License 2.0':
      //[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
      break;
    case 'GNU General Public License v3.0':
      //[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
      break;
    case 'MIT License':
      //[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      break;
    case 'BSD 2-Clause "Simplified" License':
      //[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      //[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
      break;
    case 'Boost Software License 1.0':
      //[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
      break;
    case 'Creative Commons Zero v1.0 Universal':
      //[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
      break;
    case 'Eclipse Public License 2.0':
      //https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
      break;
    case 'GNU Affero General Public License v3.0':
      //https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
      break;
    case 'GNU General Public License v2.0':
      //[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
      break;
    case 'GNU Lesser Public License v2.1':
      //https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
      break;
    case 'Mozilla Public License 2.0':
      //[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
      break;
    case 'The Unlicense':
      //[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  
  ${data.description}

  ## Table of Contents
  
  1. Installation Instructions
  2. Usage Information
  3. Contribution Guidelines
  4. Test Instructions
  5. Contact Information


  ## Installation Instructions
  
  ${data.installinstructions}


  ## Usage Information

  ${data.usage}


  ## Contribution Guidelines

  ${data.contrib}


  ## Test Instructions

  ${data.testinstructions}


  ## Contact information

  You can reach out to me via email at ${data.email} or GitHub at ${data.githubUser}

`;

}

module.exports = generateMarkdown;
