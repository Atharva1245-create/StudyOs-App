import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useApp } from './context/AppContext.jsx';
import Sidebar from './components/Sidebar.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Task from './pages/Task.jsx';
import Lecture from './pages/Lecture.jsx';
import Notes from './pages/Notes.jsx';
import Profile from './pages/Profile.jsx';
import { styles } from './styles.js';

function App() {
  const { user } = useApp(); // Check if user is logged in

  return (
    <BrowserRouter>
      {/* Agar user login NAHI hai, toh sirf Login page dikhao */}
      {!user ? (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      ) : (
        /* Agar user login hai, toh poora app dikhao */
        <div style={styles.app}>
          <Sidebar />
          <div style={styles.main}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/task" element={<Task />} />
              <Route path="/lecture" element={<Lecture />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/profile" element={<Profile />} />
              {/* Redirect to dashboard if route not found */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;