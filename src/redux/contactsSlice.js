import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://67de5562471aaaa7428400b2.mockapi.io/contact';

const contactsAdapter = createEntityAdapter({
  selectId: (contact) => contact.id,
});

const initialState = contactsAdapter.getInitialState({
  isLoading: false,
  error: null,
});

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await axios.post(BASE_URL, contact);
  return response.data;
});     

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  await axios.delete(`${BASE_URL}/${contactId}`);
  return contactId;
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        contactsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        contactsAdapter.addOne(state, action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        contactsAdapter.removeOne(state, action.payload);
      });
  },
});

export const { selectAll: selectAllContacts, selectById: selectContactById } =
  contactsAdapter.getSelectors((state) => state.contacts);

export default contactsSlice.reducer;