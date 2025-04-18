import { createSelector } from 'reselect';
import { selectAllContacts } from './contactsSlice';

export const selectFilter = (state) => state.filter;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);