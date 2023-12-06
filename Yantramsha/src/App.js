import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './routes/Home';
import Login from './routes/Login';
import Signup from './routes/Signup';
import ChatBot from './routes/ChatBot';
import AboutUs from './routes/AboutUs';
import ContactUs from './routes/ContactUs';
import Desktop from './routes/Desktop';
import Laptop from './routes/Laptop';
import GammingConfig from './routes/GammingConfig';
import OfficeConfig from './routes/OfficeConfig';
import LaptopGammingconfig from './routes/LaptopGammingconfig';
import LaptopOfficeconfig from './routes/LaptopOfficeconfig';
import FAQs from './routes/FAQs';
import OrderSummary from './routes/OrderSummary';
import Bill from './routes/Bill';
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/gameconfig" element={<GammingConfig />} />
        <Route path="/officeconfig" element={<OfficeConfig />} />
        <Route path="/laptopgamming" element={<LaptopGammingconfig />} />
        <Route path="/laptopoffice" element={<LaptopOfficeconfig />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/desktop" element={<Desktop />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/cart" element={<Outlet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<OrderSummary />} />
        <Route path="/bill" element={<Bill />} />
      </Routes>
      <ChatBot></ChatBot>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        draggable
      />
    </Router>
    
  );
}

export default App;
