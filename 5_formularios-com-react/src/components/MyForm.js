import './MyForm.css';

import { useState } from 'react';

const MyForm = ({ user }) => {
  // 6 - CONTROLLED INPUT
  // 3 - GERENCIAMENTO DE DADOS
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '');
  const [role, setRole] = useState(user ? user.role : '');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(bio);
    console.log(role);

    // 7 - LIMPAR FORM
    setName('');
    setEmail('');
    setBio('');
    setRole('');
  };

  return (
    <div>
      {/* 1 - CRIAÇÃO DE FORM */}
      {/* 5 - ENVIO DE FORM */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' placeholder='Write your name' onChange={handleName} value={name} />
        </div>
        {/* 2 - LABEL ENVOLVENDO INPUT */}
        <label>
          <span>Email:</span>
          <input type='email' name='email' placeholder='Write your e-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea name='bio' placeholder='About you' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>
        {/* 9 - SELECT */}
        <label>
          <span>System Function</span>
          <select name='role' onChange={(e) => setRole(e.target.value)}  value={role}>
            <option value='user'>User</option>
            <option value='editor'>Editor</option>
            <option value='admin'>Admin</option>
          </select>
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default MyForm;
