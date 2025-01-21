
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('open');
}

function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('time').textContent = now.toLocaleString('en-US', options);
  }

  // Update time every second
  setInterval(updateTime, 1000);

  // Initialize time on page load
  updateTime();

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('dark-mode-icon');
    icon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
};

document.getElementById('dark-mode-icon').addEventListener('click', toggleDarkMode);

  