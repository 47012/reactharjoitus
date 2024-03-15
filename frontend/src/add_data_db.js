import React, { useState } from 'react';
import { database } from './firebaseConfig'; // Import your Firebase configuration

function AddDataForm() {
  const [key, setKey] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (key.trim() === '' || data.trim() === '') {
      alert('Please enter both key and data.');
      return;
    }

    const newDataRef = database.ref(`data/${key}`); // Use database from firebaseConfig.js
    newDataRef.set(data)
      .then(() => {
        alert('Data added successfully!');
        setKey('');
        setData('');
      })
      .catch((error) => {
        console.error('Error adding data: ', error);
        alert('An error occurred while adding data.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="keyInput">Key:</label>
      <input
        id="keyInput"
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Enter key"
      />
      <label htmlFor="dataInput">Data:</label>
      <input
        id="dataInput"
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter data"
      />
      <button type="submit">Add Data</button>
    </form>
  );
}

export default AddDataForm;
