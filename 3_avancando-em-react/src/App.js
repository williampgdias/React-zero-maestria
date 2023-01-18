//Importando CSS
import './App.css';

// Importando Imagens
import Connemara from './assets/connemara.jpeg';

// Importando Componentes
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUser from './components/ShowUser';
import { useState } from 'react';
import CarDetails from './components/CarDetails';

function App() {
  const name = 'Bárbara';
  const [userName] = useState('Laura');

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

      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUser name={name} />
      <ShowUser name='William' />
      {/* props */}
      <ShowUser name={userName} />
      {/* destructuring */}
      <CarDetails brand='VW' km={100000} color='azul' newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand='Ford' color='Vermelha' km={0} newCar={true} />
      <CarDetails brand='Fiat' color='Branco' km={4500} newCar={false} />
    </div>
  );
}

export default App;
