import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import AvailableParkings from './pages/AvailableParkings';
import ListParkingSpaces from './pages/ListParkingSpaces';
import Footer from './components/footer';
import './styles.css';

function App() {
  const availableParkingSpaces = [
    { number: 1, status: 'Ocupada' },
    { number: 2, status: 'Ocupada' },
    { number: 3, status: 'Disponível' },
  ];

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="*" element={<Registration />} />
          <Route path="/available-parkings" element={<AvailableParkings availableParkingSpaces={availableParkingSpaces} />} />
          <Route path="/list-parking-spaces" element={<ListParkingSpaces />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
