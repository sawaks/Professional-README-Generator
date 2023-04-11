// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    const badges = {
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      gnuagplv3: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
      gnugplv2: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
      gnulgplv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
      apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      bsd2: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
      bsd3: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
      boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
      cc0: '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
      eclipse: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
      mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
      unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',

    }
    return badges[license];
  } else {
    return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    const link = {
      mit: '[MIT](https://choosealicense.com/licenses/mit/)',
      isc: '[ISC](https://choosealicense.com/licenses/isc/)',
      gnuagplv3: '[GNUAGPLv3](https://choosealicense.com/licenses/agpl-3.0/)',
      gnugplv2: '[GNUGPLv2](https://choosealicense.com/licenses/gpl-2.0/)',
      gnulgplv3: '[GNULGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)',
      apache: '[Apache](https://choosealicense.com/licenses/apache-2.0/)',
      bsd2: '[BSD2](https://choosealicense.com/licenses/bsd-2-clause/)',
      bsd3: '[BSD3](https://choosealicense.com/licenses/bsd-3-clause/)',
      boost: '[Boost](https://choosealicense.com/licenses/bsl-1.0/)',
      cc0: '[CC0](https://choosealicense.com/licenses/cc0-1.0/)',
      eclipse: '[Eclipse](https://choosealicense.com/licenses/epl-2.0/)',
      mozilla: '[Mozilla](https://choosealicense.com/licenses/mpl-2.0/)',
      unlicense: '[Unlicense](https://choosealicense.com/licenses/unlicense/)',

    }
    return link[license];
  } else {
    return '';
  }


}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `Distributed under the ${renderLicenseLink(license)} license. See the link for more information.`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
* GitHub Profile https://github.com/ ${data.username}
* Email ${data.email}

## License
${renderLicenseSection(data.license)}

 `;
}

module.exports = {
  generateMarkdown,
};
