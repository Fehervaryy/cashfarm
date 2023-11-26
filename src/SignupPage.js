// SignupPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Add your signup logic here
    console.log('Signup clicked with first name:', firstName, 'email:', email, 'and password:', password);
  };

  return (
    
      <div style={{ background: '#C7E1BA', padding: '30px 50px', borderRadius: '10px', maxWidth: '400px', margin: 'auto' ,marginTop: '30px' }}>
      <h1 style={{ color: '#397249' }}>Signup Page</h1>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }} />
      </label>
      <br />
      
      <p style={{ color: '#391D11', marginTop: '10px' }}>Already have an account? <Link to="/login" style={{ color: '#397249', textDecoration: 'underline' }}>Log In</Link></p>
      <Link to="/login">
      <button onClick={handleSignup} className="loginbutton2">Signup</button>
      </Link>
    </div>
  );
};

export default SignupPage;
