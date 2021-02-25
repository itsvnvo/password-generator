// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789";
var special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var prompts = [alphabet, upperCase, numbers, special];
var passwordLength = 0

//Prompt for Password Length
function grabPasswordLength(){
  passwordLength = null;
  passwordLength = prompt("Please choose a length from 8 to 128 characters for your password", "8");
  while(passwordLength < 8 || passwordLength > 128)
  passwordLength = Number(prompt("Length must be 8-128 characters"))
};
// Prompt for lowercase letters
function grabAlphabet() {
  alphabet = null;
  if (alphabet !== true); {
    alphabet = confirm("Do you want to include lowercase letters? Choose Ok or Cancel");
    if (alphabet !== true){
      alphabet = false
    }
  }
}
// Prompt for Uppercase letters
function grabUpper() {
  upperCase = null;
  if (upperCase !== true); {
    upperCase = confirm("Do you want to include Uppercase letters? Choose Ok or Cancel");
    if (upperCase !== true){
      upperCase = false
    }
  }
}
// Prompt for Special characters
function grabSpecial() {
  special = null;
  if (special !== true); {
    special = confirm("Do you want to include Special letters? Choose Ok or Cancel");
    if (special !== true){
      special = false
    }
  }
}
//Builds the password
function generatePassword(){
  grabPasswordLength()
  grabAlphabet()
  grabUpper()
  grabSpecial()

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


