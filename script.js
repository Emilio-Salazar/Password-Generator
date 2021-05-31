// Assignment code here
var lowerCase = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var upperCase = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var numberChar = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!","@","#","$","%","^","&","?"];


var generatePassword = function() {
  var charIndex = [];
  
  var setChar = function() {
    var arrayLowerCase = window.confirm("Would you like to include lower case letters?")
    var arrayUpperCase = window.confirm("Would you like to include upper case letters?")
    var arrayNumbers = window.confirm("Would you like to include numbers?")
    var arraySpecialChar = window.confirm("Would you like to include special characters?")

    if (arrayLowerCase === true) {
      charIndex = charIndex.concat(lowerCase)
    }
     if (arrayUpperCase === true) {
      charIndex = charIndex.concat(upperCase)
    }
     if (arrayNumbers === true) {
      charIndex = charIndex.concat(numberChar)
    }
     if (arraySpecialChar === true) {
      charIndex = charIndex.concat(specialChar)
    }
     if (charIndex.length < 2) {
      alert("You have to include some characters!")
      setChar()
    };
    
    return charIndex;
    
  }
  
  charAll = setChar();

  var passwordLength = function () {
    var passLength = parseInt(prompt("How long would you like your password to be? Please pick a number between 1 and 128"));

    if (passLength === NaN || passLength < 1 || passLength > 128 || passLength== false|| passLength===null) {
      alert("Please enter an acceptable input within the range!")
      passwordLength();
    }
    return passLength
  }
  passWidth = passwordLength();
  console.log(passWidth)
  passBuilt= " ";
console.log(charAll)
  var passwordBuild = function () {
    for (var i=0; i < passWidth; i++) {
      var value = Math.floor(Math.random() * (charAll.length))
      passBuilt= passBuilt + charAll[value];
      console.log(passBuilt)
      
    }
    return passBuilt
  }
return passwordBuild();
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  debugger;
  passwordText.value = password;

}
console.log(generatePassword())
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
