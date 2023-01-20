import './MyForm.css';

import { useState } from 'react';

const MyForm = () => {

  // 3 - 
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name);
  console.log(email)

  return (
    <div>
      {/* 1 - CRIAÇÃO DE FORM */}
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' placeholder='Write your name' onChange={handleName} />
        </div>
        {/* 2 - LABEL ENVOLVENDO INPUT */}
        <label>
          <span>Email:</span>
          <input type='email' name='email' placeholder='Write your e-mail' onChange={(e) => setEmail(e.target.value)} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default MyForm;
