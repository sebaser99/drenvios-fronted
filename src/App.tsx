
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import SpecialPrices from './pages/specialPrices/SpecialPrices';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/specialPrices" element={<SpecialPrices />} />
    </Routes>
  )
}

export default App
