const toggleBtn = document.getElementById('dark-mode-toggle');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

toggleBtn.addEventListener('click', () => {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle('light-mode');
    } else {
        document.body.classList.toggle('dark-mode');
    }
});