import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      handleError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        { email, password },
        { withCredentials: true }
      );

      const { success, message } = data || {};

      if (success) {
        handleSuccess(message || "Login successful");
        setTimeout(() => {
           window.location.href = "http://localhost:5173";
        }, 1500);
      } else {
        handleError(message || "Login failed");
      }
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Network or server error";
      console.error(error);
      handleError(msg);
    } finally {
      setIsLoading(false);
      setInputValue({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="auth-page">
      <div className="form_container">
        <div className="form-header">
          <h2>Welcome Back</h2>
          <p>Login to your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              placeholder="you@example.com"
              onChange={handleOnChange}
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              disabled={isLoading}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <div className="form-footer">
            <span>Don't have an account? <Link to="/signup">Sign up here</Link></span>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
