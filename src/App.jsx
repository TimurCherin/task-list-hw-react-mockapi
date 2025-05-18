import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Register from './components/Register.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';


const App = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '10px' }}>
      <Navigation />
      <div style={{ margin: '0 auto', maxWidth: '800px', padding: '20px' }}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <div>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
                  Phonebook
                </h1>
                <ContactForm />
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '20px 0' }}>
                  Contacts
                </h2>
                <ContactList />
              </div>
            }
          />
          <Route path="/" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;