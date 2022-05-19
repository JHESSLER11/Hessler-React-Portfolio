import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  const [contactSelected, setContactSelected] = useState(false)
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <main>
        <About></About>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
