import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import MensClothing from './components/mensClothing/mensClothing';
import WomenClothes from './components/womenClothes/womenClothes';
import Jewelry from './components/jewelry/jewelry';
import Electronics from './components/electronics/electronics';

function App() {
  return (
    <div className="App">








    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mensClothing' element={<MensClothing />}/>
      <Route path='/womenClothes' element={<WomenClothes />}/>
      <Route path='/jewelry' element={<Jewelry />}/>
      <Route path='/electronics' element={<Electronics />}/>
    </Routes>
    </div>
  );
}

export default App;
