import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState();
  // const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate()

 const registerUser = async(payload) =>{
      const response = await axios.post('http://127.0.0.1:8000/api/register/', payload)
      // console.log(response, "response inregister")
      // localStorage.setItem('user', JSON.stringify(response.data));
  }


  const formSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!username || !password) {
      alert('All fields are required!');
      return;
    }

    // Email format validation
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   alert('Please enter a valid email address.');
    //   return;
    // }

    // Password length check
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    try {
      const payload = { password, username };
      console.log(payload);
      const res = registerUser(payload)
      console.log(res.data);
      alert('Registered successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Something went wrong. Please try again later.');
    }
  };


  return (
    <div className="container w-50 bg-dark text-white p-3">
        <h3>Register Form</h3>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={(e)=>{setUsername(e.target.value)}}
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div> */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>{setPassword(e.target.value)}}
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
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <Link to='/'>If already Registered</Link>
      </form>
    </div>
  );
};

export default LoginForm;
