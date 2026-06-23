import { useState } from 'react';
import { useApp } from '../context/AppContext.jsx';
import { styles } from '../styles.js';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const Tasks = () => {
  const { tasks, addTask, completeTask, deleteTask } = useApp();
  const [taskInput, setTaskInput] = useState('');
  const [taskDay, setTaskDay] = useState('Monday');

  const completedTasks = tasks.filter(t => t.done).length;
  const pendingTasks = tasks.length - completedTasks;
  const taskPieData = [
    { name: 'Completed', value: completedTasks, color: '#10B981' },
    { name: 'Pending', value: pendingTasks, color: '#6366F1' }
  ];

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div>
      <h2 style={{ color: 'white', marginBottom: '20px' }}>✅ Task Management</h2>

      <div style={styles.dashboardGrid}>
        <div style={styles.gridCard}>
          <h3 style={{ margin: '0 0 15px 0', color: '#A78BFA' }}>Feed New Task</h3>
          <div style={styles.inputGroup}>
            <input style={styles.input} placeholder="Task details..." value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
            <select style={styles.input} value={taskDay} onChange={(e) => setTaskDay(e.target.value)}>
              {daysOfWeek.map(day => <option key={day} value={day} style={{color: 'black'}}>{day}</option>)}
            </select>
            <button style={styles.button} onClick={() => { addTask(taskInput, taskDay); setTaskInput(''); }}>Add</button>
          </div>
        </div>

        <div style={styles.gridCard}>
          <h3 style={{ margin: '0 0 10px 0', textAlign: 'center' }}>Completion Rate</h3>
          {tasks.length === 0 ? <p style={{textAlign: 'center', color: '#6B7280'}}>No tasks added yet.</p> : (
            <>
              <div style={{ height: '140px', width: '100%' }}>
                <ResponsiveContainer>
                  <PieChart><Pie data={taskPieData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} paddingAngle={5} dataKey="value">{taskPieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}</Pie><Tooltip contentStyle={{ background: '#1A1A2E', borderRadius: '10px' }} /></PieChart>
                </ResponsiveContainer>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                <span style={{ color: '#10B981', fontWeight: 'bold', fontSize: '14px' }}>● {completedTasks} Done</span>
                <span style={{ color: '#6366F1', fontWeight: 'bold', fontSize: '14px' }}>● {pendingTasks} Left</span>
              </div>
            </>
          )}
        </div>
      </div>

      <div style={styles.gridCard}>
        <h3 style={{ margin: '0 0 20px 0' }}>Your Task List</h3>
        <div style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '5px' }}>
          {tasks.map(task => (
            <div key={task.id} style={{ background: 'rgba(255,255,255,0.05)', borderLeft: `4px solid ${task.done ? '#10B981' : '#6366F1'}`, padding: '15px', borderRadius: '8px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#A78BFA', marginBottom: '4px' }}>{task.day}</div>
                <span style={{ textDecoration: task.done ? 'line-through' : 'none', opacity: task.done ? 0.5 : 1 }}>{task.text}</span>
                <br/>
                <button style={styles.deleteBtn} onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
              <button style={{...styles.button, background: task.done ? '#10B981' : '#6366F1'}} onClick={() => completeTask(task.id)}>
                {task.done ? 'Done' : 'Do It'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;