// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');

    // Check the user's theme preference in local storage
    const currentTheme = localStorage.getItem('theme');

    // If a theme preference is found, apply it
    if (currentTheme) {
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    }

    // Update the toggle button text based on the current theme
    updateToggleButtonText();

    // Listen for a click on the theme toggle button
    themeToggle.addEventListener('click', function() {
        // Toggle the dark-mode class on the body element
        document.body.classList.toggle('dark-mode');

        // Save the user's theme preference in local storage
        const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);

        // Update the toggle button text based on the current theme
        updateToggleButtonText();
    });

    // Function to update the toggle button text based on the current theme
    function updateToggleButtonText() {
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = 'Toggle Light Mode';
        } else {
            themeToggle.textContent = 'Toggle Dark Mode';
        }
    }
});
