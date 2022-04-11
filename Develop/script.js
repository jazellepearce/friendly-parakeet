// Assignment code here
var charsLower = "abcdefghijklmnopqrstuvwxyz";
var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = "!@#$%^&*()";
var passwordLength;
var password = "";
var providedAns;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordLength = Number(
    window.prompt(
      "Please type the number of characters you would like in your password it could be anything between 8 to 128 characters"
    )
  );
  console.log("Password length " + passwordLength);

  if (!passwordLength) {
    window.alert("please provide a number");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(
      window.prompt("Please choose between 8 and 128 characters")
    );
    console.log("Password length " + passwordLength);
  } else {
    charsLower = window.confirm("Would you like to add lower case letters");
    console.log("Lower case" + charsLower);
    charsUpper = window.confirm("Would you like to add upper case letters");
    console.log("Upper case" + charsUpper);
    numbers = window.confirm("Would you like to add numbers");
    console.log("Number " + numbers);
    special = window.confirm("Would you like to add a special character");
    console.log("Special Characted " + special);
  }
  if (!charsUpper && !charsLower && !numbers && !special) {
    providedAns = window.alert("Please provide input");
  } else if (!charsUpper && !charsLower && !numbers && !special) {
    providedAns = charsUpper.concat(charsLower, special, numbers);
    console.log(providedAns);
  } else if (!charsUpper && !charsLower && !numbers) {
    providedAns = charsUpper.concat(charsLower, numbers);
    console.log(providedAns);
  } else if (!charsUpper && !charsLower && !special) {
    providedAns = charsUpper.concat(charsLower, special);
    console.log(providedAns);
  } else if (!charsUpper && !numbers && !special) {
    providedAns = charsUpper.concat(special, numbers);
    console.log(providedAns);
  } else if (!charsLower && !numbers && !special) {
    providedAns = charsLower.concat(charsLower, special, numbers);
    console.log(providedAns);
  } else if (!charsLower && !charsUpper) {
    providedAns = charsLower.concat(charsUpper);
    console.log(providedAns);
  } else if (!charsLower && !numbers) {
    providedAns = charsLower.concat(numbers);
    console.log(providedAns);
  } else if (!charsUpper && !numbers) {
    providedAns = charsUpper.concat(numbers);
    console.log(providedAns);
  } else if (!charsLower && !special) {
    providedAns = charsLower.concat(special);
    console.log(providedAns);
  } else if (!charsUpper && !special) {
    providedAns = charsUpper.concat(special);
    console.log(providedAns);
  } else if (!numbers && !special) {
    providedAns = numbers.concat(special);
    console.log(providedAns);
  }else if (!numbers) {
    providedAns = numbers.concat;
    console.log(providedAns);
  }else if (!special) {
    providedAns = special.concat;
    console.log(providedAns);
  }else if (!charsUpper) {
    providedAns = charsUpper.concat;
    console.log(providedAns);
  }else if (!charsLower) {
    providedAns = charsLower.concat;
    console.log(providedAns);
  }


for (var i = 0, n = password.length; i < length; ++i) {
  providedAns += password.charAt(Math.floor(Math.random() * n));
 
  console.log();
  return password;
}

}

