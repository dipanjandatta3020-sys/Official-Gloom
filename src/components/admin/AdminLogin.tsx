import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (err: any) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 99999
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#fff', padding: '40px', borderRadius: '16px',
        width: '400px', display: 'flex', flexDirection: 'column', gap: '20px'
      }}>
        <h2 style={{ margin: 0, fontFamily: '"Outfit", sans-serif', fontSize: '24px' }}>Admin Login</h2>
        {error && <div style={{ color: 'red', fontSize: '14px' }}>{error}</div>}
        <input 
          type="email" placeholder="Email" required
          value={email} onChange={e => setEmail(e.target.value)}
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <input 
          type="password" placeholder="Password" required
          value={password} onChange={e => setPassword(e.target.value)}
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" style={{
            padding: '12px', backgroundColor: '#7B5CE5', color: 'white', 
            border: 'none', borderRadius: '8px', cursor: 'pointer', flex: 1
          }}>Login</button>
          <button type="button" onClick={() => window.location.hash = '#home'} style={{
            padding: '12px', backgroundColor: '#eee', color: '#333', 
            border: 'none', borderRadius: '8px', cursor: 'pointer', flex: 1
          }}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
