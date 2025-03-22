import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://67de5562471aaaa7428400b2.mockapi.io/contact';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
    const response = await axios.post(BASE_URL, contact);
    return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
    const response = await axios.delete(`${BASE_URL}/${contactId}`);
    console.log(response)
    return contactId;
});

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(contact => contact.id !== action.payload);
            });
    },
});

export default contactsSlice.reducer;
