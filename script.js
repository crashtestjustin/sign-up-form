const form = document.getElementById('form');
const pw = document.getElementById('pw');
const pw2 = document.getElementById('pw2');
const pwMissmatch = document.getElementById('pw-valid');
const input = document.querySelectorAll('input');
const requiredFieldNotice = document.querySelectorAll('.required-field-notice');
const inputValideCheck = document.getElementById('input-valid-check');

form.addEventListener('submit', e => {
    let messages = [];
    if (pw.value !== pw2.value) {
        pwMissmatch.className = 'password-missmatch'
        pw.className = 'invalid-password-inputs';
        pw2.className = 'invalid-password-inputs';
        e.preventDefault();
    } 
});

form.addEventListener('input', e => {

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



