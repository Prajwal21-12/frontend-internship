const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (name === "") {
        message.textContent = "Please enter your name.";
        message.style.color = "red";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
        return;
    }

    if (password.length < 8) {
        message.textContent =
            "Password must be at least 8 characters.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Registration successful!";
    message.style.color = "green";
});