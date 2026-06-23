import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AppProvider } from './context/AppContext.jsx';

const style = document.createElement('style');
style.innerHTML = `
  * { box-sizing: border-box; }
  body { margin: 0; padding: 0; background-color: #0F0F1A; color: white; font-family: 'Inter', system-ui, -apple-system, sans-serif; }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);