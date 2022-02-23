import React from 'react';
import ReactDOM from 'react-dom';

/* Added Routes & Route dependencies*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* added importes*/
import MainNavigation from './components/layout/MainNavigation';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home';
import AllRecipesPage from '../src/pages/AllRecipes';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Added Navigation */}
      <MainNavigation />
      <Routes>
        {/* Added two new routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/all-recipes" element={<AllRecipesPage />} />
      </Routes>
      {/* Added Footer */}
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
