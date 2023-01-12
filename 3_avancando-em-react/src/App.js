import './App.css';

import Connemara from './assets/connemara.jpeg';

function App() {
  return (
    <div className='App'>
      <h1>Avançando em React</h1>

      {/* Imagem em public */}
      <div>
        <img src='/img1.jpeg' alt='Paisagem' />
      </div>
      
      {/* Imagem em Assets */}
      <div>
        <img src={Connemara} alt='Cidade de Connemara vista de longe' />
      </div>
    </div>
  );
}

export default App;
