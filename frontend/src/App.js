import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import HashRouter instead of BrowserRouter
import MainPage from './MainPage';
//import firebase from './firebaseConfig'; // Import your Firebase configuration

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
