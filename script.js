// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('theme-toggle');

    // Apply saved theme preference to both <html> and <body>
    const isDark = localStorage.getItem('theme') === 'dark';
    setTheme(isDark);

    themeToggle.addEventListener('click', function() {
        const nowDark = !document.documentElement.classList.contains('dark-mode');
        setTheme(nowDark);
        localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    });

    function setTheme(dark) {
        document.documentElement.classList.toggle('dark-mode', dark);
        document.body.classList.toggle('dark-mode', dark);
        themeToggle.textContent = dark ? '☀ Light Mode' : '☾ Dark Mode';
    }
});
