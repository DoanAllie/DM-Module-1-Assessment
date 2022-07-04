const password = "#MisoShibaInu2020";

// check if password is at least 10 characters long, and contains at least one letter and one number

/*
if ( password.length >= 10 &&
     /[a-z]/i.test(password) &&
     /[0-9]/.test(password) ) {
    console.log("Password is available");
} else {
    console.log("Choose a different password");
}
*/

// additional checks
//     Check for presence of uppercase, lowercase, special characters, etc.
//     Check for maximum length (i.e. no more than 20 characters)
//     Make sure there aren’t spaces
//     Check for forbidden words (“password”, “letmein”)

if ( // at least 10 characters long 
     password.length >= 10 &&
     // no more than 20 characters
     password.length < 20 &&
     // contains at least one lowercase
     /[a-z]/.test(password) &&
     // contains at least one uppercase
     /[A-Z]/.test(password) &&
     // contains at least one number
     /[0-9]/.test(password) &&
     // contains at least one special character
     /[^a-zA-Z0-9]/.test(password) &&
     // does not contain whitespace
     !/[\s]/.test(password) &&
     // does not contain forbidden words (“password”, “letmein”)
     !/password|letmein/.test(password)
     ) {
   console.log("Password is available");
} else {
   console.log("Choose a different password");
}