/*
* @return false if username is NOT unique, email form is bad, password is bad, or pwd2 !== pwd*/
function regValidation() {
    const username = document.forms[0]['username'].value;
    const email = document.forms[0]['email'].value;
    const password = document.forms[0]['password'].value;
    const password2 = document.forms[0]['password2'].value;

    if (validUserName(username)) {
        if (validEmail(email)) {
            if (validPassword(password)) {
                if (matchPassword(password, password2)) {
                    return true;
                }
            }
        }
    }
    alert("Please contact the developer, something has gone wrong");
    return false;
}

// a valid username can only be combinations of letters and numbers
function validUserName(username) {
    const nameFormat = /^[A-Za-z0-9]+/g;
    const regex = RegExp(nameFormat);
    try {
        if (!regex.test(username)) {
            // window.alert("username can only be combinations of numbers and English letters");
            throw "username can only contain letters and numbers";
        }
    }
    catch (err) {
        console.error(err);
        return false;
    }
    return true;
}

function validEmail(email) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    try{
        if (!email.match(mailFormat)){
            // window.alert("please enter an valid email address");
            throw "invalid email format";
        }
    }catch (err) {
        console.error(err);
        return false;
    }
    return true;
}

function validPassword(password) {
    alert("enter password > 8 digits with: 1) at least 1 number, " +
        "2) at least an uppercase letter, 3) a lower case letter.");
    return false;
}

function matchPassword(password, password2) {
    if (password === password2) {
        return true;
    } else {
        alert("re-enter the SAME password!");
        return false;
    }
}

module.exports = {validUserName,validEmail,validPassword,matchPassword};

