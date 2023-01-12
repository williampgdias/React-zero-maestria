//Importando CSS
import './App.css';

// Importando Imagens
import Connemara from './assets/connemara.jpeg';

// Importando Componentes
import ManageData from './components/ManageData';

function App() {
  return (
    <div className='App'>
      <h1>Avançando em React</h1>

      {/* Imagem em public */}
      <div>
        {/* <img src='/img1.jpeg' alt='Paisagem' /> */}
      </div>
      
      {/* Imagem em Assets */}
      <div>
        {/* <img src={Connemara} alt='Cidade de Connemara vista de longe' /> */}
      </div>

      <ManageData />
    </div>
  );
}

export default App;
