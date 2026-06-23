import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { styles } from '../styles.js';

const Sidebar = () => {
  const location = useLocation();
  const { logout } = useApp();

  const getLinkStyle = (path) => ({
    ...styles.link,
    background: location.pathname === path ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
    color: location.pathname === path ? 'white' : '#A78BFA'
  });

  return (
    <div style={styles.sidebar}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
          <div style={{ background: '#8B5CF6', padding: '10px', borderRadius: '12px', fontSize: '24px' }}>🎓</div>
          <h2 style={{ margin: 0, color: 'white' }}>StudyOS</h2>
        </div>

        <Link to="/" style={getLinkStyle('/')}>📊 Dashboard</Link>
        <Link to="/Task" style={getLinkStyle('/Task')}>✅ Tasks List</Link>
        <Link to="/Lecture" style={getLinkStyle('/Lecture')}>📚 Lectures</Link>
        <Link to="/Notes" style={getLinkStyle('/Notes')}>📝 My Notes</Link>
        <Link to="/Profile" style={getLinkStyle('/Profile')}>👤 Profile & Summary</Link>
      </div>

      <button onClick={logout} style={{ ...styles.button, background: 'transparent', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#EF4444', marginTop: 'auto', width: '100%', padding: '12px' }}>
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;