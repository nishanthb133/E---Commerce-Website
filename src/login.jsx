// src/components/Login.jsx
import React, { useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from 'firebase/auth';
import { auth } from './firebase';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        // Register new user
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Account created successfully!');
      } else {
        // Sign in existing user
        await signInWithEmailAndPassword(auth, email, password);
        alert('Logged in successfully!');
      }
    } catch (err) {
      // Clean up Firebase error messages for user readability
      setError(err.message.replace('Firebase: ', ''));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-card">
        <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>

        {error && <p className="error-msg">{error}</p>}

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            required
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            required
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" disabled={loading} className="auth-btn">
          {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Log In'}
        </button>

        <p className="toggle-msg">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Log In' : 'Sign Up'}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;








