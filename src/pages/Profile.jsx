import { useApp } from '../context/AppContext.jsx';
import { styles } from '../styles.js';

const Profile = () => {
  const { user, tasks, lectures, notes, logout } = useApp();

  const completedTasks = tasks.filter(t => t.done).length;
  const totalAttended = lectures.reduce((sum, lec) => sum + lec.attended, 0);
  const totalClasses = lectures.reduce((sum, lec) => sum + lec.total, 0);

  return (
    <div>
      <h2 style={{ color: 'white', marginBottom: '20px' }}>👤 User Profile & Summary</h2>

      {/* User Info Section */}
      <div style={{...styles.banner, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ fontSize: '50px', background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 style={{ margin: '0', color: 'white' }}>{user?.name}</h1>
            <p style={{ margin: '5px 0', color: '#A78BFA' }}>{user?.email}</p>
            <span style={{ fontSize: '12px', color: '#6B7280' }}>Workspace joined: {user?.joinDate}</span>
          </div>
        </div>
        <button style={{...styles.button, background: '#EF4444'}} onClick={logout}>Sign Out</button>
      </div>

      {/* Summary Section */}
      <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>📈 End of Day Summary</h3>
      <div style={styles.dashboardGrid}>
        
        <div style={{...styles.gridCard, borderTop: '4px solid #10B981'}}>
          <h4 style={{ margin: '0 0 10px 0', color: '#10B981' }}>Task Status</h4>
          <h2 style={{ margin: 0, fontSize: '32px' }}>{completedTasks} / {tasks.length}</h2>
          <p style={{ margin: '5px 0 0 0', color: '#9CA3AF' }}>Tasks completed this week.</p>
        </div>

        <div style={{...styles.gridCard, borderTop: '4px solid #F59E0B'}}>
          <h4 style={{ margin: '0 0 10px 0', color: '#F59E0B' }}>Lecture Attendance</h4>
          <h2 style={{ margin: 0, fontSize: '32px' }}>{totalAttended} / {totalClasses}</h2>
          <p style={{ margin: '5px 0 0 0', color: '#9CA3AF' }}>Total classes attended.</p>
        </div>

        <div style={{...styles.gridCard, borderTop: '4px solid #6366F1'}}>
          <h4 style={{ margin: '0 0 10px 0', color: '#6366F1' }}>Knowledge Vault</h4>
          <h2 style={{ margin: 0, fontSize: '32px' }}>{notes.length}</h2>
          <p style={{ margin: '5px 0 0 0', color: '#9CA3AF' }}>Total notes saved.</p>
        </div>

      </div>
    </div>
  );
};

export default Profile;