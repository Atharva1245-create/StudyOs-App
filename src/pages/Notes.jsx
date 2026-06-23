import { useState } from 'react';
import { useApp } from '../context/AppContext.jsx';
import { styles } from '../styles.js';

const Notes = () => {
  const { notes, addNote, deleteNote } = useApp();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div>
      <h2 style={{ color: 'white', marginBottom: '20px' }}>📝 My Notes Vault</h2>
      
      <div style={styles.gridCard}>
        <h3 style={{ margin: '0 0 10px 0', color: '#A78BFA' }}>Write a New Note</h3>
        <input 
          style={styles.input} 
          placeholder="Note Title (e.g., Exam Prep)" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          style={styles.textarea} 
          placeholder="Start typing your notes here..." 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <button style={styles.button} onClick={() => { addNote(title, content); setTitle(''); setContent(''); }}>
          Save Note
        </button>
      </div>

      <div style={{ ...styles.dashboardGrid, marginTop: '25px' }}>
        {notes.map(note => (
          <div key={note.id} style={{ ...styles.gridCard, background: 'rgba(139, 92, 246, 0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>{note.title}</h3>
              <span style={{ fontSize: '12px', color: '#6B7280' }}>{note.date}</span>
            </div>
            <p style={{ color: '#E5E7EB', lineHeight: '1.5', whiteSpace: 'pre-wrap' }}>{note.content}</p>
            <button style={styles.deleteBtn} onClick={() => deleteNote(note.id)}>Delete Note</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;