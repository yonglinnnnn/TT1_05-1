import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import './Login.css';
const Login = ({ onLogin }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const updateForm = (value) => {
    setForm((prev) => ({ ...prev, ...value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const loginCredentials = { ...form };

    try {
      if (form.username.trim() === '' || form.password.trim() === '') {
        console.log('Fields cannot be empty');
      }

      const response = await fetch('add post api url here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginCredentials),
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful!');
        console.log('Token:', data.token);
        sessionStorage.setItem('token', data.token);
        // Navigate to another page upon successful login
        navigate('/dashboard');
        onLogin();
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData.message);
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Show an alert for login failure
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card styles.login-card">
            <div className="card-body">
              <NavLink className="navbar-brand" to="/" style={{ textAlign: 'center' }}>
                <img
                  alt="DBS logo"
                  style={{ width: '30%', margin: '15px auto' }}
                  src="data:image/png;base64,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"
                />
              </NavLink>

              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="username" className="required">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={form.username}
                    required={true}
                    onChange={(e) => updateForm({ username: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="required">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={form.password}
                    required={true}
                    onChange={(e) => updateForm({ password: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
