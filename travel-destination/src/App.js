import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/city/:id' element={<TourDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
