const msgElement = document.getElementById('message');
const btn = document.getElementById('actionBtn');

if (btn && msgElement) {
  btn.addEventListener('click', () => {
    msgElement.textContent = "Action triggered at " + new Date().toLocaleTimeString();
  });
  msgElement.textContent = "Ready. Push a change to deploy.";
}

// Unique function that runs on page load
function initPage() {
  document.body.dataset.pageReady = "true";
  console.log("Page initialised at", new Date().toISOString());
}

document.addEventListener('DOMContentLoaded', initPage);