## Password Generator

- [Live Link To App](https://martincespedes.github.io/Generate_Random_Password/)

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Contents

[Description](#description)

[User Story](#user-story)

[Acceptance Criteria](#acceptance-criteria)

[Installation](#installation)

[Usage](#usage)

[Features](#features)

[Application Screenshot Preview](#application-screenshot-preview)

[Resources & Credit](#resourcescredit)

[License](#license)

## Description

When the user clicks a button to generate a password, they are presented with prompts for password criteria, such as length and character types. The input is validated and at least one character type must be selected. Once all prompts are answered, a password is generated that matches the selected criteria and is either displayed in an alert or written to the page. This feature improves security by providing employees with a strong and randomly generated password.

## User Story

```md
- AS AN employee with access to sensitive data
- I WANT to randomly generate a password that meets certain criteria
- SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```md
- GIVEN I need a new, secure password
- WHEN I click the button to generate a password
- THEN I am presented with a series of prompts for password criteria
- WHEN prompted for password criteria
- THEN I select which criteria to include in the password
- WHEN prompted for the length of the password
- THEN I choose a length of at least 8 characters and no more than 128 characters
- WHEN asked for character types to include in the password
- THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
- WHEN I answer each prompt
- THEN my input should be validated and at least one character type should be selected
- WHEN all prompts are answered
- THEN a password is generated that matches the selected criteria
- WHEN the password is generated
- THEN the password is either displayed in an alert or written to the page
```

## Installation

```
- To install and use the Password Generator application, follow these steps:

- Open the Live Link to App provided in the project description.

- Alternatively, you can clone this repository to your local machine using Git:

- git clone https://github.com/martincespedes/Generate_Random_Password.git

- Open the index.html file in your web browser to run the application.
```

## Usage

```
- To use the Password Generator application, follow these steps:

- Click the "Generate Password" button on the main page.

- Follow the prompts to choose the length of the password and which types of characters to include.

- Once you have made your selections, a new password will be generated and displayed on the page.

- You can copy the password to your clipboard by clicking the "Copy to Clipboard" button
```

## Features

```
- The Password Generator application includes the following features:

- User input validation to ensure the selected password length is between 8 and 128 characters.

- User input validation to ensure at least one character type is selected.

- The ability to generate passwords containing lowercase letters, uppercase letters, numbers, and special characters.

- A responsive and intuitive user interface.

- The ability to copy the generated password to the clipboard for easy use.
```

## Application Screenshot Preview

![Password Generator](./Develop/images/03-javascript-homework-demo.png)

## Resources/Credit

- Author: Martin Cespedes - [Link to my Github](https://github.com/MartinCespedes)

## License

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

Copyright (c) 2023 Martin Cespedes

This project is licensed under the terms of the MIT license.
