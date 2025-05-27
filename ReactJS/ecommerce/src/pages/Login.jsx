import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [regUser, setRegUser] = useState(null);

  const navigate = useNavigate();

  const getUser = () => {
    const registeredUser = JSON.parse(localStorage.getItem('user'));
    setRegUser(registeredUser);
  };

  useEffect(() => {
    getUser();
  }, []);

  const formSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!regUser) {
      alert("No registered user found. Please register first.");
      return;
    }

    if (email === regUser.email && password === regUser.password) {
      alert("Login successful!");
      navigate('/dashboard');
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="container w-50 bg-dark text-white p-3 mt-4 rounded">
      <h3>Login Form</h3>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
