// Assignment code here
var generateButton = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }

  let rand = Math.random();
  return Math.floor(min * (1 - rand) + rand * max);
}

function getRandomItem(list) {
  return list[randomInt(list.length)];
}

function generatePassword() {
  while (true) {
    let userInput = window.prompt(
      "Enter the desired length of your password as a number."
    );

    // if user exits the window prompt //
    if (userInput === null) {
      return;
    }

    var passwordLength = parseInt(userInput);

    // (isNan) = is not a number when user types something else //
    if (isNaN(passwordLength)) {
      window.alert("That is not a number!");
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be between 8 and 128 characters.");
    } else {
      break;
    }
  }

  let userWantsNumbers = window.confirm(
    "Would you like to include numbers in your password?"
  );
  let userWantsSymbols = window.confirm(
    "Would you like to include symbols in your password?"
  );
  let userWantsLowerCase = window.confirm(
    "Would you like to include lowercase letters in your password?"
  );
  let userWantsUpperCase = window.confirm(
    "Would you like to include uppercase letters in your password?"
  );

  let numberList = ["0", "1", "3", "4", "5", "6", "7", "8", "9"];
  let symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"];
  let lowercaseList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let uppercaseList = [];

  let optionsCart = [];

  for (let i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase();
  }

  if (userWantsNumbers === true) {
    optionsCart.push(numberList);
  }

  if (userWantsSymbols === true) {
    optionsCart.push(symbolList);
  }

  if (userWantsLowerCase === true) {
    optionsCart.push(lowercaseList);
  }

  if (userWantsUpperCase === true) {
    optionsCart.push(uppercaseList);
  }

  if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList);
  }

  let generatePassword = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomList = getRandomItem(optionsCart);
    let randomChar = getRandomItem(randomList);
    generatePassword += randomChar;
  }

  return generatePassword;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);
