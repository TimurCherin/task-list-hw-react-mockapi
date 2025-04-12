import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contactsSlice';
import { selectFilteredContacts } from '../../redux/selectors';
import styles from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const { isLoading, error } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) return <p>Loading contacts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          {name}: {number}
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;