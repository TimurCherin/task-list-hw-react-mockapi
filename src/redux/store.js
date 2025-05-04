import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contactsSlice';
import authReducer from '../redux/authSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
});

export default store;