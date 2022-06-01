const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === '' || password === '') {
        alert('Please fill all fields!')
    };

    if (email !== '' && password !== '') {
    const formData = {
    email,
    password,
    };

    console.log(formData);
    event.currentTarget.reset();
    };
}
;
