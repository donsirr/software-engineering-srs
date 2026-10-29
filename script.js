const msgElement = document.getElementById('message');
const btn = document.getElementById('actionBtn');

btn.addEventListener('click', () => {
    msgElement.textContent = "Action triggered at " + new Date().toLocaleTimeString();
});

msgElement.textContent = "Ready. Push a change to deploy.";

// ---- NEW FUNCTION ----
function initPage() {
  // Unique behaviour: set a data attribute or log a message
  document.body.dataset.pageReady = "true";
  console.log("Page initialised at", new Date().toISOString());
}

// Run it on page load
document.addEventListener('DOMContentLoaded', initPage);
