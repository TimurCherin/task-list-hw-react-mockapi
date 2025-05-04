import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllContacts } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts by name"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{
          padding: '10px',
          border: '1px solid rgb(204, 204, 204)',
          borderRadius: '5px',
          width: '100%',
          maxWidth: '300px',
          display: 'block',
          margin: '10px auto',
        }}
      />
      
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <span>{contact.name} - {contact.number}</span>
            <button onClick={() => dispatch(deleteContact(contact.id))} style={{ padding: '5px 10px', marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;