// navbar.js
function loadNavbar() {
    fetch('./navbar/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
}

window.onload = loadNavbar;