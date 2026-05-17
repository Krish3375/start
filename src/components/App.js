import React from 'react';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
import AddContact from './AddContact';

function App() {
  const contacts = [
    {
      id: "1",
      name: "Krish Aditya",
      email: "krish23@gmail.com"
    },
    {
      id: "2",
      name: "John Doe",
      email: "gsdhs343@gmail.com"
    }
  ];

  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts } />
    </div>
  );
}

export default App;
