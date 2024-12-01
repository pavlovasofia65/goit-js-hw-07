const email = document.querySelector('[type="email"]');
const password = document.querySelector('[type="password"]');
const form = document.querySelector('.login-form');

const submit = (event) => {
    event.preventDefault();
    if (!email.value || !password.value) {
        console.log('All form fields must be filled in');
    } else {
        const input = {
            email: email.value,
            password: password.value
        }
        console.log(input);
        form.reset()
    };
}

form.addEventListener("submit", submit)