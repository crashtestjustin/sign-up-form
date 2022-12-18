const form = document.getElementById('form');
const pw = document.getElementById('pw');
const pw2 = document.getElementById('pw2');
const pwMissmatch = document.getElementById('pw-valid');
const pwCheck = document.getElementById('pw-check');
const input = document.querySelectorAll('input');
const requiredFieldNotice = document.querySelectorAll('.required-field-notice');
const inputValideCheck = document.getElementById('input-valid-check');

//need to set up form validation for all required fields on blanks and invalid data

form.addEventListener('submit', e => {
    let messages = [];
    pwPattern = "^(?=.*[A-Z])[a-zA-Z0-9]{4,}$";
    if (pw.value !== pw2.value) {
        pwMissmatch.className = 'password-missmatch'
        pw.className = 'invalid-password-inputs';
        pw2.className = 'invalid-password-inputs';
        e.preventDefault();
    } //NEED TO FIGURE OUT HOW TO TEST AGAINST A REGEXP FOR THE PASSWORD STYLE
    if (pw.value.length < 4 || RegExp.pwPattern.test(pw.value) == false) {
        pwCheck.className = ".required-field-notice password-invalid";
        pw.className = 'invalid-password-inputs';
        e.preventDefault();
    }
});

pw2.addEventListener('input', e => {
    if (pw.value !== pw2.value) {
        pwMissmatch.className = 'password-missmatch';
        pw.className = 'invalid-password-inputs';
        pw2.className = 'invalid-password-inputs';
    } else {
        pwMissmatch.className = 'required-field-notice';
        pw.classList.remove('invalid-password-inputs');
        pw2.classList.remove('invalid-password-inputs');
    }
});





function testMessage() {
    console.log("test");
}



