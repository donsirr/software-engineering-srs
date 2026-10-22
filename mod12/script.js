const msgElement = document.getElementById('message')
const btn = document.getElementById('actionBtn');

btn.addEventListener('click', () => {
    msgElement.textContent = "Action triggered at " + new Date().toLocaleTimeString();
});

msgElement.textContent = "Ready. Push a change to deploy.";
