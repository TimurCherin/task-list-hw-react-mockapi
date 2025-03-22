import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

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
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Phone number" required />
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default ContactForm;