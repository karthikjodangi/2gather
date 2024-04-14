import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'scott' && password === 'tiger') {
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Welcome back!</h1>
          <p className="col-lg-10 fs-4">Please enter your username and password to continue. If you're new here, you can <Link to="/signup">sign up</Link> for an account.</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form onSubmit={handleLogin} className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
