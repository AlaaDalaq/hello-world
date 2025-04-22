import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import './login.css';  // Import your own styles for the form

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate hook for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');  // Clear previous errors

    try {
      // Send POST request to the backend (localhost:5001/register) using fetch
      const response = await fetch('http://localhost:5001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'An error occurred. Please try again.');
      }

      // Alert on successful registration
      alert('Registration successful! You can now log in.');

      // Clear the input fields
      setUsername('');
      setPassword('');

      // Redirect to the login page after successful registration
      navigate('/login');
    } catch (err) {
      // Handle error from the backend
      setError(err.message);
    } finally {
      setLoading(false);  // Set loading to false after request completion
    }
  };

  // Navigate to the Login page when the toggle button is clicked
  const toggleToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create an Account</h2>
        {error && <p className="error-message">{error}</p>}  {/* Display error */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}  // Update username state
              required
              placeholder="Enter your username"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}  // Update password state
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        {/* Toggle button to switch to login page */}
        <button onClick={toggleToLogin} className="toggle-btn">
          Already have an account? Login here.
        </button>
      </div>
    </div>
  );
};

export default Register;
