import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

//   console.log(email, "This is email");
//   console.log(password, "This is password");
const formSubmit = (event) =>{
    event.preventDefault();
  console.log(email, "This is email after submit");
  console.log(password, "This is password after submit");
  const payload = {email,password}
  console.log(payload);
}


  return (
    <div className="container w-50 bg-dark text-white p-3">
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
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <div id="emailHelp" className="form-text">
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
