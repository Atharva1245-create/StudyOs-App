import { useState } from 'react';
import { useApp } from '../context/AppContext.jsx';
import { styles } from '../styles.js';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const Lectures = () => {
  const { lectures, addLecture, updateAttendance, deleteLecture } = useApp();
  const [lecInput, setLecInput] = useState('');
  const [lecDay, setLecDay] = useState('Monday');
  const [lecTotal, setLecTotal] = useState(1);

  const totalAttended = lectures.reduce((sum, lec) => sum + lec.attended, 0);
  const totalClasses = lectures.reduce((sum, lec) => sum + lec.total, 0);
  const missedClasses = totalClasses - totalAttended;
  
  const attendancePieData = [
    { name: 'Attended', value: totalAttended, color: '#10B981' },
    { name: 'Missed', value: missedClasses, color: '#EF4444' }
  ];

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div>
      <h2 style={{ color: 'white', marginBottom: '20px' }}>📚 Weekly Lectures & Attendance</h2>

      <div style={styles.dashboardGrid}>
        <div style={styles.gridCard}>
          <h3 style={{ margin: '0 0 15px 0', color: '#A78BFA' }}>Feed Your Schedule</h3>
          <div style={styles.inputGroup}>
            <input style={styles.input} placeholder="Subject Name..." value={lecInput} onChange={(e) => setLecInput(e.target.value)} />
            <select style={styles.input} value={lecDay} onChange={(e) => setLecDay(e.target.value)}>
              {daysOfWeek.map(day => <option key={day} value={day} style={{color: 'black'}}>{day}</option>)}
            </select>
            <input type="number" min="1" style={{...styles.input, maxWidth: '80px'}} placeholder="Total" value={lecTotal} onChange={(e) => setLecTotal(e.target.value)} />
            <button style={styles.button} onClick={() => { addLecture(lecInput, lecDay, lecTotal); setLecInput(''); setLecTotal(1); }}>Add Class</button>
          </div>
        </div>

        <div style={styles.gridCard}>
          <h3 style={{ margin: '0 0 10px 0', textAlign: 'center' }}>Attendance Tracker</h3>
          {lectures.length === 0 ? <p style={{textAlign: 'center', color: '#6B7280'}}>No classes added.</p> : (
            <>
              <div style={{ height: '140px', width: '100%' }}>
                <ResponsiveContainer>
                  <PieChart><Pie data={attendancePieData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} paddingAngle={5} dataKey="value">{attendancePieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}</Pie><Tooltip contentStyle={{ background: '#1A1A2E', borderRadius: '10px' }} /></PieChart>
                </ResponsiveContainer>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                <span style={{ color: '#10B981', fontWeight: 'bold', fontSize: '14px' }}>● {totalAttended} Attended</span>
                <span style={{ color: '#EF4444', fontWeight: 'bold', fontSize: '14px' }}>● {missedClasses} Missed</span>
              </div>
            </>
          )}
        </div>
      </div>

      <div style={styles.gridCard}>
        <h3 style={{ margin: '0 0 10px 0' }}>Mark Your Attendance</h3>
        <div style={styles.weeklyGrid}>
          {lectures.map(lecture => {
            const percentage = Math.round((lecture.attended / lecture.total) * 100);
            return (
              <div key={lecture.id} style={styles.dayBox}>
                <button style={{position: 'absolute', top: '5px', right: '5px', ...styles.deleteBtn, marginTop: 0}} onClick={() => deleteLecture(lecture.id)}>✕</button>
                <h4 style={{ margin: '0 0 5px 0', color: '#A78BFA' }}>{lecture.day}</h4>
                <p style={{ fontSize: '13px', margin: '0 0 10px 0', height: '35px', overflow: 'hidden' }}>{lecture.subject}</p>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: percentage >= 75 ? '#10B981' : percentage > 0 ? '#F59E0B' : '#EF4444' }}>
                  {lecture.attended} / {lecture.total}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', gap: '5px' }}>
                  <button style={{...styles.button, background: '#EF4444', padding: '4px 10px'}} onClick={() => updateAttendance(lecture.id, -1)} title="Missed">-</button>
                  <button style={{...styles.button, background: '#10B981', padding: '4px 10px'}} onClick={() => updateAttendance(lecture.id, 1)} title="Attended">+</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Lectures;