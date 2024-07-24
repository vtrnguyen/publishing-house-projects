document.addEventListener('DOMContentLoaded', (event) => {
    const btnLogOut = document.querySelector(".log-out");
    
    btnLogOut.addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/source/login.html';
    });
});