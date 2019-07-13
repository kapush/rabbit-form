const form = document.querySelector('form');
const password = document.querySelector('.rabbit-form__pass');
const email = document.querySelector('.rabbit-form__email');
const submit = document.querySelector('.rabbit-form__submit')

const rememberMe = document.querySelector('.remember-me');
const rememberMeLink = document.querySelector('.remember-me-link');

form.addEventListener('input', (event)=>{
    if(!event.target.tagName === 'INPUT') return;
    if(password.checkValidity() && email.checkValidity()){
        rememberMe.classList.remove('remember-me_disabled');
        submit.classList.remove('rabbit-form__submit_disabled');
    } else {
        rememberMe.classList.add('remember-me_disabled');
        submit.classList.add('rabbit-form__submit_disabled');
    }
});

rememberMeLink.addEventListener('click', (event)=>{
    if(!rememberMe.classList.contains('remember-me_disabled')){
        rememberMeLink.classList.toggle('remember-me-link_checked');
    }
});