// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login clicked with email:', email, 'and password:', password);
  };

  return (
    <div style={{ background: '#C7E1BA', padding: '30px 50px', borderRadius: '10px', maxWidth: '400px', margin: 'auto',marginTop: '30px' }}>
      <h1 style={{ color: '#397249' }}>Login Page</h1>
      <label style={{ color: '#391D11' }} >
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }} />
      </label>
      <br />
      <label style={{ color: '#391D11' }}>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }} />
      </label>
      <br />
      <Link to="/main">
        <button onClick={handleLogin} className = "loginbutton2">Login</button>
      </Link>
      <p style={{ color: '#391D11', marginTop: '10px' }}>Don't have an account? <Link to="/signup" style={{ color: '#397249', textDecoration: 'underline' }}>Sign Up</Link></p>
    </div>
  );
};

export default Login;
