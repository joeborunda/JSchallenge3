// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var numbers = "1234567890";
var passwordLength;
var checkuppercase;
var checknumber;
var checkspecial;

// Ask user for password requirements


//function to check length
function Length(){
  passwordLength = prompt("Enter password length number between 8 and 128 characters");

  if (passwordLength<8){
    alert("Password length must be a number between 8-128 characters");
    Length();
  } else (passwordLength>128) {
    alert("Password length must be a number between 8-128 characters");
    Length();
  }
  return passwordLength;
}

//function to check case
function UCase(){
  checkuppercase = prompt("Include uppercase?\n(Yes or No)");
  checkuppercase = checkuppercase.toLowerCase();

 if (checkuppercase === "yes") {
    checkuppercase = true;
    return checkuppercase;

  } else (checkuppercase === "no") {
    checkuppercase = false;
    return checkuppercase;
  }
  return checkuppercase;

}

//function to check numbers

function addnumbers() {
  checknumber = prompt("Include numbers? \n(Yes or No)");
  checknumber = checknumber.toLowerCase();

  if (checknumber === "yes" || checknumber === "y") {
    checknumber = true;
    return checknumber;

  } else (checknumber === "no" || checknumber === "n") {
    checknumber = false;
    return checknumber;
  }
  return checknumber;

}

//function to add special characters

function addSCharacters() {
  checkspecial = prompt("Include special characters?\n(Yes or No)");
  checkspecial = checkspecial.toLowerCase();

    if (checkspecial === "yes" || checkspecial === "y") {
    checkspecial = true;
    return checkspecial;

  } else (checsSpecial === "no" || checkspecial === "n") {
    checkSpecial = false;
    return checkspecial;
  }

  return checkspecial;
}


//make generate password function
function generatePassword() {
  passwordLength();
  console.log(passwordLength);
  UCasee();
  console.log(checkuppercase);
  Addnumbers();
  console.log(checknumber);
  AddSCharacters();
  console.log(checkspecial);

  var characters = lowercase;
  var password = "";
  if (checkuppercase && checknumber && checkspecial) {
    characters += uppercase + numbers + specialChar;

  } else if (checkuppercase && checknumber) {
    characters += checkuppercase + numbers;

  } else if (checknumber && checkspecial) {
    characters += numbers + specialChar;

  } else if (checkuppercase && specialCheck) {
    characters += uppercase + specialChar;

  } else if (checkuppercase) {
    characters += uppercase;

  } else if (checkNumber) {
    characters += numbers;

  } else if (checkspecial) {
    characters += specialChar;

  } else {
    characters === lowercase;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
