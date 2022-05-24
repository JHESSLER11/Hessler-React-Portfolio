import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Portfolio from './components/Project';
import Resume from './components/Resume';
import 'bulma/css/bulma.min.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <div>
        <Nav />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<ContactForm />} />
          <Route path='resume' element={<Resume />} />
        </Routes>
        </div>
      <main>
      </main>
      <footer>
      <Footer></Footer>
      </footer>
    </div>
    </Router>
  );
}

export default App;
