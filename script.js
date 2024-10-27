document.getElementById("login-btn").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
  
    // Dummy credentials for demo purposes
    const correctUsername = "user123";
    const correctPassword = "password123";
  
    // Validate credentials
    if (username === correctUsername && password === correctPassword) {
      message.style.color = "green";
      message.textContent = "Login successful!";
    } else {
      message.style.color = "red";
      message.textContent = "Invalid username or password!";
    }
  });
  