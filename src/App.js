
import {HashRouter as Router, Route, Routes, } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import About from './pages/About';

import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';




function App() {
  
  return (
    <>
    <Router>
      <Header />
      <div className='w-full flex justify-center cursor-default'>
      <div className='pb-24 pt-8 border-2 bg-blue-300 border-blue-500 w-[95vw] sm:w-[90vw] rounded-xl p-3 text-center cursor-default'>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/about" element={<About />} />

    <Route exact path="/contact" element={<Contact />} />


   
    </Routes>
    </div>
    </div>
    <Footer />
    </Router>

    
    
    </>
  );
}

export default App;
