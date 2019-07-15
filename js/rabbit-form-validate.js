const rect = document.querySelector('.rabbit-rectangle');
const form = document.querySelector('form');

const password = document.querySelector('.rabbit-form__pass');
const passHint = password.nextElementSibling;

const email = document.querySelector('.rabbit-form__email');
const emailHint = email.nextElementSibling;

const error = document.querySelector('.rabbit-form__error');
const submit = document.querySelector('.rabbit-form__submit')

const rememberMe = document.querySelector('.remember-me');
const rememberMeLink = rememberMe.querySelector('.remember-me-link');

form.addEventListener('input', (event)=>{
    if(!event.target.tagName === 'INPUT') return;
    if(password.checkValidity() && email.checkValidity()){
        rememberMe.classList.remove('remember-me_disabled');
        rememberMeLink.classList.add('remember-me-link_checked');
        submit.classList.remove('rabbit-form__submit_disabled');
    } else {
        rememberMe.classList.add('remember-me_disabled');
        submit.classList.add('rabbit-form__submit_disabled');
        hideError();
    }
});

rememberMeLink.addEventListener('click', (event)=>{
    if(!rememberMe.classList.contains('remember-me_disabled')){
        rememberMeLink.classList.toggle('remember-me-link_checked');
    }
});

submit.addEventListener('click', (event)=>{
    event.preventDefault();

    if(email.checkValidity() && password.checkValidity()){
        verifyEmail(email.value);
    }
});

function youAreRegistered(){
    rect.remove();
    const reged = document.querySelector('.rabbit__reged');
    reged.style.display = 'block';
}

function showError(){
    error.style.visibility = 'initial';
}

function hideError(){
    error.style.visibility = 'hidden';
}