// Assignment code here
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
      max = min 
         min = 0
  }

  var rand = Math.random()
    return Math.floor(min*(1 - rand) + rand*max)
}


function getRandomItem(list) {
  return list[randomInt(list.length)]
}


function generatePassword() {

    while (true) {

  var userInput =  window.prompt("How long do want your password to be?")

// if user exits the window prompt //
if (userInput === null)  {
  return
}

  var passwordLength = parseInt(userInput)

// (isNan) = is not a number when user types something else //
  if (isNaN(passwordLength)) {
    window.alert("That is not a number!")
   } 
   

      else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters.") 
      }
              else {
                  break
                        }
  }

  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
  var userWantsLowerCase = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUpperCase = window.confirm("Would you like to include uppercase letters in your password?")

    var numberList = [ "0", "1", "3", "4", "5", "6", "7", "8", "9"]
    var symbolList = ["!", "@", "#", "$", "%", "^", "&" , "*"]
    var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var uppercaseList = []

    var optionsCart = []

      for (var i = 0; i < lowercaseList.length; i++) {
        uppercaseList[i] = lowercaseList[i].toUpperCase()
      }
    
      if (userWantsNumbers === true) {
      optionsCart.push(numberList)
      }

        if (userWantsSymbols === true) {
        optionsCart.push(symbolList)
      }
       
          if (userWantsLowerCase === true) {
          optionsCart.push(lowercaseList)
        }
          
             if (userWantsUpperCase === true) {
           optionsCart.push(uppercaseList)
            }

                if (optionsCart.length === 0 ) {
                  optionsCart.push(lowercaseList)
                }
              
    var generatePassword = ""

    for (var i = 0; i < passwordLength; i++)  {
      var randomList = getRandomItem(optionsCart)
      var randomChar = getRandomItem(randomList)
      generatePassword += randomChar

    }

    return generatePassword
  

}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 
    if (password) {
  passwordText.value = password;
    }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);