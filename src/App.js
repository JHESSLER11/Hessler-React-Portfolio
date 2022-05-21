import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  //const [currentPage, setCurrentPage] = useState('about')
  return (
    // <BrowserRouter>
    //   <Routes>
    //       <Route path="/" element={<Header />}>
    //       <Route path="/" element={<Nav />} />
    //       </Route>
    //   </Routes>
    // </BrowserRouter>
    <Router>
      <div>
        <Header>
        </Header>
        <div>
        <Nav />
        <Routes>
          <Route path='about' element={<About />} />
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
