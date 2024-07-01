// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/page1" element={<FirstPage />} />
        <Route path="/page2" element={<SecondPage />} />
        <Route path="/page3" element={<ThirdPage />} />
        <Route path="*" element={<Navigate to="/page1" />} />
      </Routes>
    </Router>
  );
};

export default App;
