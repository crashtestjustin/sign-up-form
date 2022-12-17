const createAccount = document.querySelector('.create-account');
const pw = document.getElementById('pw');
const pw2 = document.getElementById('pw2');
const email = document.getElementById('email');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const tel = document.getElementById('tel');
const form = document.querySelector('form');
const input = document.querySelectorAll('input');
const requiredMessage = document.querySelectorAll('span.required-field-notice');

createAccount.addEventListener('click', e => {
    input.forEach (field => {
        if (!field.validity.valid) {
            errorReport();
        }
    })
    
    // if (email.validity.typeMismatch) {
    //     email.setCustomValidity("Please enter a valid email address.")
    //     email.reportValidity();
    // }
});

function errorReport() {
    
}



