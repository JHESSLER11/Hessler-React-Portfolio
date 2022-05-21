import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer'

// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from 'react-router-dom'

function App() {
  const [currentPage, setCurrentPage] = useState('about')
  return (
    // <BrowserRouter>
    //   <Routes>
    //       <Route path="/" element={<Header />}>
    //       <Route path="/" element={<Nav />} />
    //       </Route>
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Header currentPage = {currentPage} setCurrentPage = {setCurrentPage}>
        
      </Header>
      <Nav></Nav>
      <main>
        {currentPage === 'about' && <About></About>}
        {currentPage === 'contact' && <ContactForm></ContactForm>}
      </main>
      <footer>
      <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
