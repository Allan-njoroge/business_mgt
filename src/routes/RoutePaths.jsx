import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage'
import SignUp from '@/pages/SignUp';
import Dashboard from '@/pages/Dashboard';
import Invoices from '@/pages/Invoices';
import Inventory from '@/pages/Inventory';
import Surveys from '@/pages/Surveys';
import GlymChat from '@/pages/GlymChat'

const RoutePaths = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/invoice' element={<Invoices />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/surveys' element={<Surveys />} />
          <Route path='/glymchat' element={<GlymChat />} />
        </Routes>
    </Router>
  );
};

export default RoutePaths;