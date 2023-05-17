import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio';
import NotFound from '../pages/NotFound';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <BrowserRouter>
      <Navbar toggle={toggle} />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/portfolio/:cat" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
