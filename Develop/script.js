// Variables
var generateBtn = document.querySelector("#generate");
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var special = "!#$%&()*+',-./:;<=>?@[]^_`{|}~";
var passwordLength = 0;
var lowerCasePreference;
var upperCasePreference;
var numberPreference;
var specialPreference;

//Prompt for Password Length
function grabPasswordLength() {
  passwordLength = prompt("Please choose a length from 8 to 128 characters for your password", "8");
  while (passwordLength < 8 || passwordLength > 128)
    passwordLength = Number(prompt("Length must be 8-128 characters"))
}
// Prompt for lowercase letters
function grabAlphabet() {
  // alphabet = null;
  lowerCasePreference = confirm("Do you want to include lowercase letters? Choose Ok or Cancel");
  console.log(alphabet)
}
//Prompt  for numbers
function grabNumbers() {
  numberPreference= confirm("Do you want to include numbers? Choose Ok or Cancel");
  console.log(numbers)
}
// Prompt for Uppercase letters
function grabUpper() {
  upperCasePreference = confirm("Do you want to include Uppercase letters? Choose Ok or Cancel");
  console.log(upperCase)
}

// Prompt for Special characters
function grabSpecial() {
    specialPreference = confirm("Do you want to include Special letters? Choose Ok or Cancel");
    console.log(special)
  }

//Builds the code
  function generatePassword() {
    var passwordText = "";
    var build = "";
    if (lowerCasePreference === true) {
      build = build.concat(alphabet)
    }
    if (numberPreference === true) {
      build = build.concat(numbers)
    }
    if (upperCasePreference === true) {
      build = build.concat(upperCase) 
    }
    if (specialPreference === true) {
      build = build.concat(special)
    } 
   if (lowerCasePreference === false && numberPreference === false && upperCasePreference === false && specialPreference === false) {
      alert("No Characters selected")
    }
    for (var i = 0; i < passwordLength; i++) {
      var randomChild = Math.floor(Math.random() * build.length);
      passwordText = passwordText + build[randomChild];
    }
    console.log(build)
    return passwordText
  }

  //Displays the text
  function writePassword() {
    grabPasswordLength();
    grabAlphabet();
    grabNumbers();
    grabUpper();
    grabSpecial();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    document.getElementById("password").value = (password)
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
