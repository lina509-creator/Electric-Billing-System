document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Normally, you would check the email and password against a database
    if (email === 'test@example.com' && password === 'password') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', 'John Doe');
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        const userName = localStorage.getItem('userName');
        const navBar = document.querySelector('.navbar-nav');
        navBar.innerHTML = `
            <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Customer Care</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pay Bills</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Welcome, ${userName}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="logout()">Logout</a>
            </li>
        `;
    }
});

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    window.location.href = 'index.html';
}
