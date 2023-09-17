import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const defaultUsername = "user@example.com"; // Default username
  const defaultPassword = "password"; // Default password

  const handleLogin = () => {
    if (email === defaultUsername && password === defaultPassword) {
      // Authentication successful, you can redirect the user to another page
      alert("Login successful");
    } else {
      // Authentication failed, show an error message
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;