// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', isDarkMode);
});

// Check Local Storage for Dark Mode Preference
const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
if (savedDarkMode) {
  body.classList.add('dark-mode');
  themeToggle.checked = true; // Set the slider to the "checked" state
} else {
  body.classList.remove('dark-mode');
  themeToggle.checked = false; // Set the slider to the "unchecked" state
}
