import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Events from './pages/Events';
import Recordings from './pages/Recordings';
import HarpShop from './pages/HarpShop';
import Contact from './pages/Contact';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Landing} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/harpshop" exact component={HarpShop} />
        <Route path="/recordings" component={Recordings} />
        <Route path="/events" component={Events} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
