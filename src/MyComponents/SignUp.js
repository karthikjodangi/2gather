import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Add your sign-up logic here, for example:
    // - Sending a request to your backend to create a new user
    // - Handling success and error responses

    // For demonstration purposes, assuming sign-up is successful, navigate to home
    navigate('/');
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Hey there New User!</h1>
          <p className="col-lg-10 fs-4">We're thrilled to have you join our platform. Discover a world of possibilities by signing up for an account.Please enter your desired username and password to sign up for an account.</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form onSubmit={handleSignUp} className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              <label htmlFor="floatingConfirmPassword">Confirm Password</label>
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
          </form>
          <p className="mt-3">Already have an account? <Link to="/authentication">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
