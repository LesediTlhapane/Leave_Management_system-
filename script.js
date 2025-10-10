// // Toggle password visibility
// const togglePassword = document.getElementById("togglePassword");
// const passwordInput = document.getElementById("password");

// if (togglePassword) {
//     togglePassword.addEventListener("click", () => {
//         const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
//         passwordInput.setAttribute("type", type);
//     });
// }

// // Basic login validation (demo only)
// const loginForm = document.getElementById("loginForm");
// if (loginForm) {
//     loginForm.addEventListener("submit", (e) => {
//         e.preventDefault();

//         const username = document.getElementById("username").value.trim();
//         const password = document.getElementById("password").value.trim();

//         // Demo credentials (for testing only)
//         if (username === "admin" && password === "admin123") {
//             alert("Login successful!");
//             // redirect to dashboard page (later)
//         } else {
//             window.location.href = "login-error.html";
//         }
//     });
// }
