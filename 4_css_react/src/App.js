import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className='App'>
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>

      {/* CSS DE COMPONENTE */}
      <MyComponent />
      <p>Este parágrafo é do APP.js</p>
    </div>
  );
}

export default App;
