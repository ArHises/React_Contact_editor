
import { useState, useEffect } from 'react';

export function SignUp({}) {

const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(null); // null = untouched

  useEffect(() => {
  if (email === '') {
    setEmailValid(null); // no feedback when empty
    return;
  }
  // simple regex for demonstration
  // matches basic email format you@example.com
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setEmailValid(regex.test(email));
}, [email]);

  return (
    <form>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name"
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        {emailValid === false && (
          <p style={{ color: 'red' }}>Invalid email format</p>
        )}
      </div>

      <button type="submit" disabled={!emailValid || name.trim() === ''}>
        Sign Up
      </button>
    </form>
    );
}