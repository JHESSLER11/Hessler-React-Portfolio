import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer'


function App() {
  const [currentPage, setCurrentCategory] = useState(false)
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <main>
        <About></About>
        <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
