// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordLength;


//Prompt for Password Length
function grabPasswordLength() {
  passwordLength = null;
  passwordLength = prompt("Please choose a length from 8 to 128 characters for your password", "8");
  while (passwordLength < 8 || passwordLength > 128)
    passwordLength = Number(prompt("Length must be 8-128 characters"))
};
// Prompt for lowercase letters
function grabAlphabet() {
  alphabet = null;
  if (alphabet !== true); {
    alphabet = confirm("Do you want to include lowercase letters? Choose Ok or Cancel");
    if (alphabet !== true) {
      alphabet = false
    }
  }
}
//Prompt  for numbers
function grabNumbers() {
  numbers = null;
  if (numbers !== true); {
    numbers = confirm("Do you want to include numbers? Choose Ok or Cancel");
    if (numbers !== true) {
      numbers = false
    }
  }
}
// Prompt for Uppercase letters
function grabUpper() {
  upperCase = null;
  if (upperCase !== true); {
    upperCase = confirm("Do you want to include Uppercase letters? Choose Ok or Cancel");
    if (upperCase !== true) {
      upperCase = false
    }
  }
}
// Prompt for Special characters
function grabSpecial() {
  special = null;
  if (special !== true); {
    special = confirm("Do you want to include Special letters? Choose Ok or Cancel");
    if (special !== true) {
      special = false
    }
  }
}
//Builds the code
function buildEl() {
  build = [];
  if (grabAlphabet === true) {
    build = alphabet
  }
  if (grabNumbers === true) {
    if (build.length === 0) {
      build = grabNumbers;
    } else {
      build = build.concat(grabNumbers);
    }
  }
  if (grabUpper === true) {
    if (build.length === 0) {
      build = grabUpper;
    } else {
      build = build.concat(grabUpper);
    }
  }
  if (grabSpecial === true) {
    if (build.length === 0) {
      build = grabSpecial;
    } else {
      build = build.concat(grabSpecial);
    }
  } else if (grabAlphabet === false && grabNumbers === false && grabUpper=== false && grabSpecial === false) {
    alert("No Characters selected")
  }
}

  // Write password to the #password input
  function writePassword() {
    grabPasswordLength();
    grabAlphabet();
    grabNumbers();
    grabUpper();
    grabSpecial();
    buildEl();
    var passwordResult = '';
    var passwordText = document.querySelector("#password");
    for (var i = 0; i < passwordLength; i++) {
      randomChild = Math.floor(Math.random() * build.length);
      passwordResult = passwordResult + buildEl[randomChild];
      passwordText.value = password;
      document.getElementById("password").value = (passwordResult)
    }
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", function(event) {
    writePassword();;
  })
