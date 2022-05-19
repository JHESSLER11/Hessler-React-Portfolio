import React, { useState } from 'react';
import './App.css';
import ContactForm from './componenets/Contact';
import Header from './componenets/Header';
import Nav from './componenets/Nav';

function App() {
  const [contactSelected, setContactSelected] = useState(false)
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <main>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
