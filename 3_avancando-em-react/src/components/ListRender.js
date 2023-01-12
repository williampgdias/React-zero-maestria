import { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['William', 'Bárbara', 'Laura', 'Sidnei', 'Zeiry']);

  return (
    <div>
      <ul>
        {list.map((nome) => (
          <li>{nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
