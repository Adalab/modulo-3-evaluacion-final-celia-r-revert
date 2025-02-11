import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import './styles/App.scss';
import App from './App.jsx';
import { HashRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
    
  </StrictMode>,
);
