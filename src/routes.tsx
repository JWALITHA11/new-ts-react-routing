
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './routes.css';
import Home from './components/Home';
import Services from './components/Services';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/" className='links'>Home</Link>
            </li>
          <li>
            <Link to="/services" className='links'>Services</Link>
            </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
