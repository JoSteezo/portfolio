const test = document.getElementById('submitButton');
const statusMessage = document.getElementById('formStatus');

test.addEventListener('click', (e) => {
    e.preventDefault();
    statusMessage.innerHTML = 'You just sent a message.';
    console.log('message success');
});