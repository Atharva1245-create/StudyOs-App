import { useApp } from '../context/AppContext.jsx';
import { styles } from '../styles.js';

const Dashboard = () => {
  const { tasks, lectures, notes, user } = useApp();

  const pendingTasks = tasks.filter(t => !t.done).length;
  const totalAttended = lectures.reduce((sum, lec) => sum + lec.attended, 0);

  return (
    <div>
      <div style={styles.banner}>
        <div>
          <h1 style={{ margin: '0', color: 'white', fontSize: '32px' }}>Welcome back, {user?.name.split(' ')[0]}!</h1>
          <p style={{ margin: '5px 0 0 0', opacity: 0.9 }}>Here is your quick overview for today.</p>
        </div>
        <div style={{ fontSize: '60px' }}>👨‍🎓</div>
      </div>

      <div style={styles.dashboardGrid}>
        <div style={{...styles.gridCard, textAlign: 'center'}}>
          <h2 style={{ fontSize: '40px', margin: '10px 0' }}>{pendingTasks}</h2>
          <p style={{ color: '#A78BFA', fontWeight: 'bold' }}>Pending Tasks</p>
        </div>
        
        <div style={{...styles.gridCard, textAlign: 'center'}}>
          <h2 style={{ fontSize: '40px', margin: '10px 0' }}>{totalAttended}</h2>
          <p style={{ color: '#10B981', fontWeight: 'bold' }}>Classes Attended</p>
        </div>

        <div style={{...styles.gridCard, textAlign: 'center'}}>
          <h2 style={{ fontSize: '40px', margin: '10px 0' }}>{notes.length}</h2>
          <p style={{ color: '#6366F1', fontWeight: 'bold' }}>Saved Notes</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;