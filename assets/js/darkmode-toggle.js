document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');
  
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      toggleSwitch.checked = currentTheme === 'dark';
    }
  
    toggleSwitch.addEventListener('change', (e) => {
      const theme = e.target.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  });
  