// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  }

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

// This function will run through all the charactors and prompts needed to get the password info.
function generatePassword() {
 
  var passwordLetr = [];
  var thePassword = [];
  
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numeric = [1,2,3,4,5,6,7,8,9,0];
  var specialChar = ["!","#","$","%","&","*","<","=",">","?","@","[","]","{","}","~"]
  var passwordLength = prompt("Please choose charactors between 8 and 128.");
  var numCharLength = parseInt(passwordLength);
  
 // If the user does NOT choose a password between the specified numerals
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a number between 8 and 128");
      return
    }
 // Alerts the user the password will be the amount of charators entered
    else {alert("Your password will be "+ numCharLength +" charactors long")}

 // Variables for the choice of charactors the user wants to use
    var lowerCaseAns = confirm("Would you like LOWER CASE charactors?");
    var upperCaseAns = confirm("Would you like UPPER CASE charactors?");
    var numericAns = confirm("Would you like any NUMBERS?");
    var specialCharAns = confirm("Would you like any SPECIAL CHARACTORS?");
  
 // If the user does not choose any of the charactor choices
    if (!lowerCaseAns && !upperCaseAns && !numericAns && !specialCharAns) {
      alert("You must choose at least one charactor type.");
      return;
    }
 // If statements are pushed up to the empty variable passwordLetr if command is TRUE
     if (lowerCaseAns) {
      for( var i = 0; i < lowerCase.length; i++) {
        passwordLetr.push(lowerCase[i]);
        console.log(lowerCaseAns);
      }
    }

    if (upperCaseAns) {
      for (var i = 0; i < upperCase.length; i++) {
        passwordLetr.push(upperCase[i]);
        console.log(upperCaseAns);
      }
    }

    if (numericAns) {
      for (var i = 0; i < numeric.length; i++) {
        passwordLetr.push(numeric[i]);
        console.log(numericAns);
      }
    }

    if (specialCharAns) {
      for ( i = 0; i < specialChar.length; i++) {
        passwordLetr.push(specialChar[i]);
        console.log(specialCharAns);
      }
    }
 // For statment with Math Random to generate thePassword after all commands are answered
    for (i = 0; i < numCharLength; i++) {
      var index = Math.floor(Math.random() * passwordLetr.length);
      thePassword = thePassword + passwordLetr[index];
      }
      passwordText.value = thePassword;
  }
  
  
  