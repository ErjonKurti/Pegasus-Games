import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// import ReactDOM from "react-dom/client";

import './App.css';

import Navbar from './components/navbar';
import Footer from './components/footer';

import Home from './pages/home';
import Games from './pages/games';
import Store from './pages/store';
import AboutUs from './pages/about_us';

import ACMirage from './pages/home/ac_mirage';
import WHearts from './pages/home/wild_hearts';
import SAbove from './pages/home/scars_above';

import BuyPage1 from './pages/store/buy1';
import BuyPage2 from './pages/store/buy2';

import Gamesp2 from './pages/games/gamesp2';
import Gamesp3 from './pages/games/gamesp3';
import Gamesp4 from './pages/games/gamesp4';
import Gamesp5 from './pages/games/gamesp5';
import Gamesp6 from './pages/games/gamesp6';
import Gamesp7 from './pages/games/gamesp7';

import './assets/css/style.css';
import './assets/js/main';

import 'jquery/dist/jquery.min.js';              // Import jQuery
import 'popper.js/dist/umd/popper.min.js';       // Import Popper.js
import 'bootstrap/dist/js/bootstrap.min.js';    // Import Bootstrap JS

function App() {
  const location = useLocation();
  const hideNavAndFooterRoutes = ['/ac_mirage', '/scars_above.js', '/wild_hearts.js', '/buy1.js', '/buy2.js'];

  return (
    <div className="App">
      {!hideNavAndFooterRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        
        <Route path='/' element={<Home />} />

        <Route path='/home.js' element={<Home />} />
        <Route path='/games.js' element={<Games />} />
        <Route path='/store.js' element={<Store />} />
        <Route path='/about_us.js' element={<AboutUs />} />

        <Route path='/ac_mirage' element={<ACMirage />} />
        <Route path='/scars_above.js' element={<SAbove />} />
        <Route path='/wild_hearts.js' element={<WHearts />} />

        <Route path='/buy1.js' element={<BuyPage1 />} />
        <Route path='/buy2.js' element={<BuyPage2 />} />

        <Route path='/gamesp2.js' element={<Gamesp2 />} />
        <Route path='/gamesp3.js' element={<Gamesp3 />} />
        <Route path='/gamesp4.js' element={<Gamesp4 />} />
        <Route path='/gamesp5.js' element={<Gamesp5 />} />
        <Route path='/gamesp6.js' element={<Gamesp6 />} />
        <Route path='/gamesp7.js' element={<Gamesp7 />} />

      </Routes>
      {!hideNavAndFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
