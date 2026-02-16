
function register(event) {
    event.preventDefault();

    const username = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (password.length !== 8) {
        alert("Password must be exactly 8 characters.");
        return;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Account created successfully! Welcome " + username);
    window.location.href = "dashboard.html";
}
function login(event) {
    event.preventDefault();

    const email = document.getElementById("email2").value.trim();
    const password = document.getElementById("password2").value.trim();

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const storedUsername = localStorage.getItem("username");

    if (!storedEmail || !storedPassword) {
        alert("No account found. Please register first.");
        window.location.href = "register.html";
        return;
    }

    if (email === storedEmail && password === storedPassword) {
        alert("Login successful! Welcome back." + storedUsername);
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}
