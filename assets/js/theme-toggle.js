// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create theme toggle button
  const toggleContainer = document.createElement('div');
  toggleContainer.className = 'theme-toggle-container';
  
  const toggleButton = document.createElement('button');
  toggleButton.className = 'theme-toggle';
  toggleButton.setAttribute('aria-label', 'Cambiar tema');
  toggleButton.innerHTML = `
    <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-15a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zM5 12a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H5zm15 0a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1zM6.7 6.7a1 1 0 0 1 0-1.4l.7-.7a1 1 0 0 1 1.4 1.4l-.7.7a1 1 0 0 1-1.4 0zm10.6 10.6a1 1 0 0 1 0-1.4l.7-.7a1 1 0 1 1 1.4 1.4l-.7.7a1 1 0 0 1-1.4 0zM17.3 6.7a1 1 0 0 1-1.4 0l-.7-.7a1 1 0 0 1 1.4-1.4l.7.7a1 1 0 0 1 0 1.4zM6.7 17.3a1 1 0 0 1-1.4 0l-.7-.7a1 1 0 0 1 1.4-1.4l.7.7a1 1 0 0 1 0 1.4z"/>
    </svg>
    <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zm0-18c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm-3 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-1-3a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/>
    </svg>
    <span class="toggle-text">Cambiar tema</span>
  `;
  
  toggleContainer.appendChild(toggleButton);
  
  // Insert toggle button at the beginning of the body
  const body = document.body;
  body.insertBefore(toggleContainer, body.firstChild);
  
  // Check for saved theme preference or respect OS preference
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    updateToggleButton(true);
  } else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
    updateToggleButton(false);
  } else {
    // If no saved preference, check OS preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      updateToggleButton(true);
    } else {
      updateToggleButton(false);
    }
  }
  
  // Toggle theme when button is clicked
  toggleButton.addEventListener('click', function() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      updateToggleButton(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      updateToggleButton(true);
    }
  });
  
  // Toggle theme when user presses 't' key
  document.addEventListener('keydown', function(e) {
    if (e.key === 't' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      toggleButton.click();
    }
  });
  
  // Update toggle button appearance based on current theme
  function updateToggleButton(isDark) {
    if (isDark) {
      toggleButton.querySelector('.sun-icon').style.display = 'inline-block';
      toggleButton.querySelector('.moon-icon').style.display = 'none';
      toggleButton.querySelector('.toggle-text').textContent = 'Modo claro';
    } else {
      toggleButton.querySelector('.sun-icon').style.display = 'none';
      toggleButton.querySelector('.moon-icon').style.display = 'inline-block';
      toggleButton.querySelector('.toggle-text').textContent = 'Modo oscuro';
    }
  }
  
  // Listen for OS theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          document.documentElement.classList.add('dark');
          updateToggleButton(true);
        } else {
          document.documentElement.classList.remove('dark');
          updateToggleButton(false);
        }
      }
    });
  }
});
