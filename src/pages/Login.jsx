import { useState } from 'react';
import { useApp } from '../context/AppContext.jsx';
import { styles } from '../styles.js';

const Login = () => {
  const { login } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      login(name, email);
    }
  };

  return (
    <div style={styles.loginContainer}>
      <form style={styles.loginBox} onSubmit={handleLogin}>
        <div style={{ fontSize: '60px', marginBottom: '10px' }}>🎓</div>
        <h1 style={{ margin: '0 0 5px 0', color: 'white' }}>StudyOS</h1>
        <p style={{ color: '#A78BFA', marginBottom: '30px' }}>Your ultimate student workspace.</p>

        <input 
          type="text" 
          placeholder="Enter your Name" 
          style={{...styles.input, width: '100%', marginBottom: '15px'}} 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input 
          type="email" 
          placeholder="Enter your Email" 
          style={{...styles.input, width: '100%', marginBottom: '25px'}} 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" style={{...styles.button, width: '100%', padding: '12px', fontSize: '16px'}}>
          Enter Workspace
        </button>
      </form>
    </div>
  );
};

export default Login;