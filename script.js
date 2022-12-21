const form = document.getElementById('form');
const pw = document.getElementById('pw');
const pw2 = document.getElementById('pw2');
const pwMissmatch = document.getElementById('pw-valid');
const pwCheck = document.getElementById('pw-check');
const input = document.querySelectorAll('input');
const requiredFieldNotice = document.querySelectorAll('.required-field-notice');
const telErrorMessage = document.getElementById('tel-notice');
const inputValideCheck = document.getElementById('input-valid-check');

pwPattern = new RegExp('^(?=.*[A-Z])[a-zA-Z0-9]{4,}$');
telPattern = new RegExp("^\d{3}-\d{3}-\d{4}$|^\d{10}$");

form.addEventListener('submit', e => {
    password = pw.value;
    input.forEach (field => {
        if (field.validity.valueMissing) {
            field.className = 'invalid-inputs';
            requiredFieldNotice.forEach (notice => {
                notice.className = 'required-field-notice required-message';
            });
            pwCheck.className = 'required-field-notice required-message';
        }
    });
    for (i=0; i < 6; i++) {
        if(!input[i].validity.valid) {
            if(input[i].validity.tooShort) {
                input[i].className = 'invalid-inputs';
                requiredFieldNotice[i].className = 'required-field-notice min-characters';
            }
            if(input[i].validity.typeMismatch) {
                if(input[i].id === 'email') {
                    input[i].className = 'invalid-inputs';
                    requiredFieldNotice[i].className = 'required-field-notice invalid-email';
                }
                if(input[i].id === 'pw') {
                    pwCheck.className = ".required-field-notice password-invalid";
                    pw.className = 'invalid-inputs';
                }
            }
            if(input[i].id === 'tel') {
                input[i].className = 'invalid-inputs';
                telErrorMessage.className = 'tel-error-message invalid-tel';
            }
            e.preventDefault();
        } else {
            if(input[i].id === 'tel') {
                telErrorMessage.className = 'tel-error-message';
                input[i].classList.remove('invalid-inputs');
            } else {
                requiredFieldNotice[i].className = 'required-field-notice';
                input[i].classList.remove('invalid-inputs');
            }
        }
    }
    if (pw.value !== pw2.value) {
        pwMissmatch.className = 'password-missmatch'
        pw.className = 'invalid-inputs';
        pw2.className = 'invalid-inputs';
    }
    if (pw.value.length < 4 || !pwPattern.test(password)) {
        pwCheck.className = ".required-field-notice password-invalid";
        pw.className = 'invalid-inputs';
    }
    e.preventDefault();
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
});



