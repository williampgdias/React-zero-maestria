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
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = 'Bárbara';
  const [userName] = useState('Laura');

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0 },
    { id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 3434 },
    { id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 234 },
  ];

  const showMessage = () => {
    console.log('Evento do componente pai.');
  };

  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    {
      id: 1,
      name: 'William',
      age: 33,
      job: 'Chef',
    },
    {
      id: 2,
      name: 'Bárbara',
      age: 33,
      job: 'Waitress',
    },
    {
      id: 3,
      name: 'Laura',
      age: 3,
      job: 'Bagunceira',
    },
  ];

  return (
    <div className='App'>
      <h1>Avançando em React</h1>

      {/* IMAGEM EM PUBLIC */}
      <div>
        <img src='/img1.jpeg' alt='Paisagem' />
      </div>

      {/* IMAGEM EM ASSETS */}
      <div>
        <img src={Connemara} alt='Cidade de Connemara vista de longe' />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUser name={name} />
      <ShowUser name='William' />

      {/* PROPS */}
      <ShowUser name={userName} />

      {/* DESTRUCTURING */}
      <CarDetails brand='Ford' color='Vermelha' km={0} newCar={true} />
      <CarDetails brand='Fiat' color='Branco' km={4500} newCar={false} />

      {/* LOOP EM ARRAY DE OBJETOS */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}

      {/* FRAGMENT */}
      <Fragment propFragment='teste' />

      {/* CHILDREN */}
      <Container myValue='testing 2'>
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue='testing'>
        <h3>Testando o container</h3>
      </Container>

      {/* EXECUTAR FUNÇÃO */}
      <ExecuteFunction myFunction={showMessage} />

      {/* STATE LIFT */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      {/* DESAFIO */}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} job={user.job} age={user.age} />
      ))}
    </div>
  );
}

export default App;
