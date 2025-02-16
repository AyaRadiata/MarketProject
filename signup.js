// saving specific elements as variables
const UPinp = document.getElementById('userPassword');
const UNinp = document.getElementById('userEmail');
const UPinp1 = document.getElementById('userPassword1');

const logAfterText = document.getElementsByClassName("log_after_text");

const logAfterTextMail = document.getElementById("log_after_text_mail");
const logAfterTextPassword = document.getElementById("log_after_text_password");

const passTip = document.getElementById('passTip');

// creating `verify` function for password validation
const verify = () => {
    var ok = true;
    if(UPinp.value != UPinp1.value){
        ok = false;
    }
    if(ok == false){
        alert("The Passwords are not the same");
    }
    return ok;
}

// creating `hasNumber` function to check password on number content
const hasNumber = (str) => {
    return /[0-9]/.test(str);
}
// creating `hasAlphaLow` function to check password on lowercase letters content
const hasAlphaLow = (str) => {
    return /[a-z]/.test(str);
}
// creating `hasAlphaUp` function to check password on uppercase letters content
const hasAlphaUp = (str) => {
    return /[A-Z]/.test(str);
}
// creating `hasAlphaLow` function to check password on symbols content
const hasSymbol = (str) => {
    return /([^a-zA-Z\d ])/.test(str);
}

// creating `passStrength` function to check password on strength
const passStrength = (pass) => {
    if(pass.length <=8 || hasNumber(pass)==false || hasAlphaLow(pass)==false || hasAlphaUp(pass)==false || hasSymbol(pass)==false){ // checking if password satisfies required criteria
        UPinp.dataset.isValid = "no"; // Show that password isn`t strong enough if it not satisfies strong password criteria
        logAfterTextPassword.dataset.afterText = "vis";
    }
    else{
        UPinp.dataset.isValid = "yes"; // Show that password is strong enough if it satisfies strong password criteria
        logAfterTextPassword.dataset.afterText = "invis";
    }
}

// Event listener on password input
UPinp.addEventListener("input", function(){
    let password = UPinp.value; // saving entered password as the variable
    passStrength(password); // checking entered password`s strenght throug `passStrength` function
});

// Event listener on email input
UNinp.addEventListener("input", function(){
    let mail = UNinp.value; // save entered email as the variable
    if(!(mail.includes("@"))){ // checking email`s symbol content
        UNinp.dataset.isValid = "no"; // Show that email does not satisfies email criteria
        logAfterTextMail.dataset.afterText = "vis";
    } else { 
        UNinp.dataset.isValid = "yes"; // Show that email does satisfies email criteria
        logAfterTextMail.dataset.afterText = "invis";
    }
});