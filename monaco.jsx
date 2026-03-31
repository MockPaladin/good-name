import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './monacoEditor.jsx';

createRoot(document.getElementById('monaco')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
