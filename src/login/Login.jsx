import React, { useState } from "react";
import img from "../assets/img/login_section.png";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page-container">
      <div className="login-row">
        <div className="login-image-container">
          <img src={img} alt="Login" className="login-image" />
        </div>

        <div className="login-form-container">
          <div className="login-form-card">
            <div className="login-title-container">
              <h1>Login to LeavePulse</h1>
            </div>

            <form>
              <div className="login-field-container">
                <input
                  type="email"
                  className="login-field"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login-field-container">
                <input
                  type={showPassword ? "text" : "password"}
                  className="login-field"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="login-password-container">
                <input
                  type="checkbox"
                  id="showPasswordCheck"
                  checked={showPassword}
                  onChange={togglePasswordVisibility}
                />
                <label htmlFor="showPasswordCheck">Show Password</label>
              </div>

              <div>
                <button
                  type="submit"
                  className="login-btn"
                  onClick={() => navigate("/")}
                >
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
