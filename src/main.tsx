import { Capacitor } from '@capacitor/core';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const platformNames: Record<string, string> = {
  android: 'Android',
  ios: 'iPhone',
  web: 'Web browser',
};

function App() {
  const platform = Capacitor.getPlatform();

  return (
    <main className="app">
      <h1>Smart Home</h1>
      <p className="platform">Running on {platformNames[platform] ?? platform}</p>
    </main>
  );
}

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
