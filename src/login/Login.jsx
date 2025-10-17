import React, { useState } from "react";
import img from "../assets/img/login_section.png";
import "./login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page-container">
      <div className="login-row">
        {/* Image Section */}
        <div className="login-image-container">
          <img src={img} alt="Login" className="login-image" />
        </div>

        {/* Form Section */}
        <div className="login-form-container">
          <div className="login-form-card">
            {/* Title */}
            <div className="login-title-container">
              <h1>Login to LeavePulse</h1>
            </div>

            {/* Form */}
            <form>
              {/* Email Field */}
              <div className="login-field-container">
                <input
                  type="email"
                  className="login-field"
                  placeholder="Email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="login-field-container">
                <input
                  type={showPassword ? "text" : "password"}
                  className="login-field"
                  placeholder="Password"
                  required
                />
              </div>

              {/* Show Password Checkbox */}
              <div className="login-password-container">
                <input
                  type="checkbox"
                  id="showPasswordCheck"
                  checked={showPassword}
                  onChange={togglePasswordVisibility}
                />
                <label htmlFor="showPasswordCheck">Show Password</label>
              </div>

              {/* Login Button */}
              <div>
                <button type="submit" className="login-btn">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
