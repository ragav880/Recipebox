import React from 'react'
import './Form.css' // Import the CSS file for additional styling

function Register() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-md-4 form-container">
        <h2 className="text-center form-title">Register</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
