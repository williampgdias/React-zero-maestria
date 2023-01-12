import { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['William', 'Bárbara', 'Laura', 'Sidnei', 'Zeiry']);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'William',
      age: 33,
    },
    {
      id: 2,
      name: 'Bárbara',
      age: 33,
    },
    {
      id: 3,
      name: 'Laura',
      age: 3,
    },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((nome, i) => (
          <li key={i}>{nome}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} years
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
