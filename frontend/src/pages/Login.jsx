import React from 'react'
import './Form.css' // Import the CSS file for additional styling

function Login() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-md-4 form-container">
        <h2 className="text-center form-title">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
