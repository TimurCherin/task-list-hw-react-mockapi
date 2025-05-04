import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts, addContact } from '../../redux/contactsSlice'; 

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', backgroundColor: '#fff', borderRadius: '5px', maxWidth: '400px', margin: '0 auto' }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Phone number"
        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
      <button type="submit" style={{ padding: '10px', backgroundColor: '#ff9500', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;