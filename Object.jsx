import React, { useState } from 'react';

function UserForm() {
  const [user, setUser] = useState({ name: '', age: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className='i' >
      <h2 className='head'>User Form</h2>
      <div>
      <label>
        Name:
        <input 
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
      </label>
      <br /><br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
          placeholder="Enter age"
        />
      </label>
      </div>
      <br />
      <p>
        <strong>Entered Name:</strong> {user.name} 
        <br /><br />
        <strong>Entered Age:</strong> {user.age}
      </p>
    </div>
  );
}

export default UserForm;
