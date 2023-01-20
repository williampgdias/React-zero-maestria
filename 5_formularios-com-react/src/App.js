import MyForm from './components/MyForm';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Forms</h1>
      <MyForm user={{ name: 'Josias', email: 'josias@gmail.com' }} />
    </div>
  );
}

export default App;
