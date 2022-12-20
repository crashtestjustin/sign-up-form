const form = document.getElementById('form');
const pw = document.getElementById('pw');
const pw2 = document.getElementById('pw2');
const pwMissmatch = document.getElementById('pw-valid');
const pwCheck = document.getElementById('pw-check');
const input = document.querySelectorAll('input');
const requiredFieldNotice = document.querySelectorAll('.required-field-notice');
const inputValideCheck = document.getElementById('input-valid-check');

pwPattern = new RegExp('^(?=.*[A-Z])[a-zA-Z0-9]{4,}$');
telPattern = new RegExp("^\d{3}-\d{3}-\d{4}$|^\d{10}$");

form.addEventListener('submit', e => {
    password = pw.value;
    input.forEach (field => {
        if(field.validity.valueMissing) {
            requiredFieldNotice.forEach (notice => {
                notice.className = 'required-field-notice required-message';
            });
            field.className = 'invalid-inputs';
        }
        e.preventDefault();
    });
    for (i=0; i < 6; i++) {
        if(!input[i].validity.valid) {
            if(input[i].validity.tooShort) {
                input[i].className = 'invalid-inputs';
                requiredFieldNotice[i].className = 'required-field-notice min-characters';
                e.preventDefault();
            }
            if(input[i].validity.typeMismatch) {
                if(input[i].id === 'email') {
                    input[i].className = 'invalid-inputs';
                    requiredFieldNotice[i].className = 'required-field-notice invalid-email';
                } //NEED TO FIGURE OUT HOW TO VALIDATE TELEPHONE????
                if(input[i].id === 'tel' && !telPattern.test(input[i])) {
                    console.log(input[i]);
                    input[i].className = 'invalid-inputs';
                    requiredFieldNotice[i].className = 'required-field-notice invalid-tel';
                }
                e.preventDefault();
            }
        }
    }
    if (pw.value !== pw2.value) {
        pwMissmatch.className = 'password-missmatch'
        pw.className = 'invalid-inputs';
        pw2.className = 'invalid-inputs';
        e.preventDefault();
    }
    if (pw.value.length < 4 || !pwPattern.test(password)) {
        pwCheck.className = ".required-field-notice password-invalid";
        pw.className = 'invalid-inputs';
        e.preventDefault();
    }
});

pw2.addEventListener('input', e => {
    if (pw.value !== pw2.value) {
        pwMissmatch.className = 'password-missmatch';
        pw.className = 'invalid-inputs';
        pw2.className = 'invalid-inputs';
    } else {
        pwMissmatch.className = 'required-field-notice';
        pw.classList.remove('invalid-inputs');
        pw2.classList.remove('invalid-inputs');
    }
});

pw.addEventListener('input', e => {
    const password = pw.value;
    if (pw.value.length >= 4 && pwPattern.test(password)) {
        pwCheck.classList.remove('password-invalid');
        pw.classList.remove('invalid-inputs');
    }
})





function testMessage() {
    console.log("test");
}



