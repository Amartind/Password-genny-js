// Set up the generate button event listener
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // Prompt the user for password options
  var includeLowercase = confirm("Do you want lowercase letters in the password?");
  var includeUppercase = confirm("Do you want uppercase letters in the password?");
  var includeNumbers = confirm("Do you want numbers in the password?");
  var includeSpecialCharacters = confirm("Do you want special characters in the password?");
  var passwordLength = prompt("How long do you want the password to be? (8-128)");
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid selection. Please try again and enter a number between 8 and 128 for the password length.");
  } else {
    // Generate the password using the user-specified options
    var password = generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters, passwordLength);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Generate a random password function
function generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters, length) {
  // Set up a character set to use for the password
  var charSet = "";
  if (includeLowercase) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    charSet += "0123456789";
  }
  if (includeSpecialCharacters) {
    charSet += "!@#$%^&*()_+";
  }

  var password = "";

  // Generate a random password by selecting a random character from the character set for the desired length
  for (var i = 0; i < length; i++) {
    var randomCharIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomCharIndex];
  }

  return password;
}