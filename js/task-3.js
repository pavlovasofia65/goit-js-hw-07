const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const greeting = () => {
    output.textContent = input.value.trim() || 'Anonymous';
};
input.addEventListener('input', greeting);