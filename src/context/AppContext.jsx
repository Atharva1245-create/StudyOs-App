import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Naya User State (Null means not logged in)
  const [user, setUser] = useState(null);

  const [tasks, setTasks] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [notes, setNotes] = useState([]);

  // Auth Functions
  const login = (name, email) => setUser({ name, email, joinDate: new Date().toLocaleDateString() });
  const logout = () => setUser(null);

  // Task Functions
  const addTask = (text, day) => { if (text) setTasks([...tasks, { id: Date.now(), text, day, done: false }]); };
  const completeTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  // Lecture Functions
  const addLecture = (subject, day, total) => { if (subject && total) setLectures([...lectures, { id: Date.now(), subject, day, attended: 0, total: parseInt(total) }]); };
  const updateAttendance = (id, amount) => {
    setLectures(lectures.map(l => l.id === id ? { ...l, attended: Math.max(0, Math.min(l.attended + amount, l.total)) } : l));
  };
  const deleteLecture = (id) => setLectures(lectures.filter(l => l.id !== id));

  // Note Functions
  const addNote = (title, content) => { if (title && content) setNotes([{ id: Date.now(), title, content, date: new Date().toLocaleDateString() }, ...notes]); };
  const deleteNote = (id) => setNotes(notes.filter(n => n.id !== id));

  return (
    <AppContext.Provider value={{ 
      user, login, logout,
      tasks, addTask, completeTask, deleteTask, 
      lectures, addLecture, updateAttendance, deleteLecture,
      notes, addNote, deleteNote
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);