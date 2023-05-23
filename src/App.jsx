
import NavBar from "./components/NavBar/NavBar";
import { Inicio } from "./pages/inicio/inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./pages/category/itemDetailContainer/itemDetailContainer";
import { Nosotros } from "./pages/nosotros/Nosotros";
import React, { useState } from 'react';
function App() {

  const [countCar, setCountCar] = useState(0);
  const agregarAlCarrito = () => {
    setCountCar(countCar + 1);
  }
  return (
    <BrowserRouter>
      <NavBar countCar={countCar}/>
      <Routes>
        <Route path="/" element={<ItemListContainer agregarAlCarrito={agregarAlCarrito}/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/inicio" element={<Inicio/>} />
        <Route path="/category/bautismos/:id" element={<ItemListContainer agregarAlCarrito={agregarAlCarrito}/>} />
        <Route path="/category/bautismos/item/:id" element={<ItemDetailContainer agregarAlCarrito={agregarAlCarrito}/>}/>
      </Routes>


    </BrowserRouter>

  );
}

export default App;
