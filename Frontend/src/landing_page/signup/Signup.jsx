import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { email, password, username } = inputValue;

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

    if (!email || !password || !username) {
      handleError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { email, password, username },
        { withCredentials: true }
      );

      const { success, message } = data || {};

      if (success) {
        handleSuccess(message || "Signup successful");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        handleError(message || "Signup failed");
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
        username: "",
      });
    }
  };

  return (
    <div className="auth-page">
      <div className="form_container">
        <div className="form-header">
          <h2>Create Account</h2>
          <p>Join us and start trading today</p>
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
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              placeholder="Choose a username"
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
              placeholder="At least 6 characters"
              onChange={handleOnChange}
              disabled={isLoading}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>

          <div className="form-footer">
            <span>Already have an account? <Link to="/login">Login here</Link></span>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Signup;
