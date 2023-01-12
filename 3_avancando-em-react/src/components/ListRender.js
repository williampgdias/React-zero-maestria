import { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['William', 'Bárbara', 'Laura', 'Sidnei', 'Zeiry']);

  const [users] = useState([
    {
      id: 1,
      name: 'William',
      age: 33,
    },
    {
      id: 123412,
      name: 'Bárbara',
      age: 33,
    },
    {
      id: 2,
      name: 'Laura',
      age: 3,
    },
  ]);

  return (
    <div>
      <ul>
        {list.map((nome, i) => (
          <li key={i}>{nome}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age} anos</li>
        ))}
      </ul>
    </div>

  
    
  );
};

export default ListRender;
