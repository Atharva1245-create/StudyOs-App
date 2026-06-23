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

// const DashboardChart = () => {
//   // Replace these hardcoded values with your actual state/props later!
//   const data = [
//     { name: 'Pending Tasks', count: 11, color: '#a855f7' }, // Purple
//     { name: 'Classes Attended', count: 11, color: '#22c55e' }, // Green
//     { name: 'Saved Notes', count: 11, color: '#3b82f6' }, // Blue
//   ];

//   return (
//     <div style={{
//       backgroundColor: '#1e1b4b', // Dark background matching your theme
//       padding: '20px',
//       borderRadius: '16px',
//       marginTop: '24px',
//       height: '350px',
//       border: '1px solid #312e81'
//     }}>
//       <h3 style={{ color: '#fff', marginBottom: '20px', fontFamily: 'sans-serif' }}>
//         Weekly Overview
//       </h3>
      
//       <ResponsiveContainer width="100%" height="85%">
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#2e2a75" vertical={false} />
//           <XAxis dataKey="name" stroke="#a5b4fc" tickLine={false} />
//           <YAxis stroke="#a5b4fc" tickLine={false} axisLine={false} />
//           <Tooltip 
//             contentStyle={{ backgroundColor: '#111033', border: '1px solid #4338ca', borderRadius: '8px' }}
//             labelStyle={{ color: '#fff' }}
//           />
//           {/* Custom cell coloring to match each card's specific color */}
//           <Bar dataKey="count" radius={[8, 8, 0, 0]}>
//             {data.map((entry, index) => (
//               <rect key={`cell-${index}`} fill={entry.color} />
//             ))}
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default DashboardChart;