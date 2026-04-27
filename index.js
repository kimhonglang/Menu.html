const container = document.getElementById('container');
const registerButton = document.getElementById('register');
const loginBtn= document.getElementById('login');

registerButton.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});