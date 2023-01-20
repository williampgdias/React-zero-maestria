import './App.css';
import MyComponent from './components/MyComponent';

import { useState } from 'react';

function App() {
  const n = 15;

  const [name] = useState('Bárbara');

  const redTitle = false;

  return (
    <div className='App'>
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>

      {/* CSS DE COMPONENTE */}
      <MyComponent />
      <p>Este parágrafo é do APP.js</p>

      {/* INLINE CSS */}
      <p style={{ padding: '25px', fontSize: '2rem', color: 'blue' }}>Este elemento foi estilizado de forma inline</p>

      {/* CSS INLINE DINÂMICO */}
      <h2 style={n > 10 ? { color: 'purple' } : { color: 'pink' }}>CSS Dinâmico</h2>
      <h2 style={n < 10 ? { color: 'purple' } : { color: 'pink' }}>CSS Dinâmico</h2>

      <h2 style={name === 'William' ? { color: 'green', backgroundColor: '#000', padding: '25px' } : null}>CSS Dinâmico</h2>

      {/* CLASSE DINÂMICA */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este título vai ter classe dinâmica</h2>
    </div>
  );
}

export default App;
