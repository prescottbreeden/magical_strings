import React from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';
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
          <Route path="/" exact component={Landing} />
          <Route path="/classes" exact component={Classes} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/events" component={Events} />
          <Route path="/harpshop" exact component={HarpShop} />
          <Route path="/recordings" component={Recordings} />
        </BaseLayout>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
