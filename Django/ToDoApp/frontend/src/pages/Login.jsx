import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [regUser, setRegUser] = useState(null);

  const navigate = useNavigate();

  const getUser = (payload) => {
    const registeredUser = axios.post('http://127.0.0.1:8000/api/login/', payload);
    setRegUser(registeredUser);
  };

  useEffect(() => {
    getUser();
  }, []);

  const formSubmit = async(event) => {
    event.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields.");

    }
    const payload = {username , password}

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', payload);
      alert("Login successful");
      console.log("Logged in user:", response.data);

      // Save user data to state or localStorage if needed
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Navigate to dashboard or home
      navigate('/dashboard');

    } catch (error) {
      console.error("Login error:", error);
      alert("Error while login: " + (error.response?.data?.message || "Invalid credentials"));
    }
  };

  return (
    <div className="container w-50 bg-dark text-white p-3 mt-4 rounded">
      <h3>Login Form</h3>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <div id="emailHelp" className="form-text text-white-50">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" className="btn btn-primary me-3">
          Submit
        </button>
        <Link to='/register' className="btn btn-link text-white">If not Registered</Link>
      </form>
    </div>
  );
};

export default LoginForm;
