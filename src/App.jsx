import React from 'react';
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Classes from './pages/Classes';
import Contact from './pages/Contact';
import Events from './pages/Events';
import HarpShop from './pages/HarpShop';
import Landing from './pages/Landing';
import Recordings from './pages/Recordings';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { BaseLayout } from './layouts/BaseLayout';

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/harpshop" element={<HarpShop />} />
            <Route path="/recordings" element={<Recordings />} />
          </Routes>
        </BaseLayout>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
