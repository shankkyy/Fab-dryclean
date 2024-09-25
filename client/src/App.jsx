import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FabDryClean from './Pages/FabDryClean'; // Ensure the correct path
// import ServicesPage from './pages/ServicesPage';
// import ContactPage from './Pages/ContactPage';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FabDryClean />} />
        {/* <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
