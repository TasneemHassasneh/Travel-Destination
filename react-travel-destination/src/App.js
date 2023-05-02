import './App.css';
import Home from '../src/components/home/Home';
import React from 'react';
import {Routes,  Route} from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails';
import Tour from './components/tours/tour/Tour';






function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/city/:id" element={<TourDetails Tour={Tour}/>} />
    </Routes>
    </>
  );
}

export default App;
