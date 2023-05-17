
import NavBar from "./components/NavBar/NavBar";
import { Inicio } from "./pages/inicio/inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Nosotros } from "./pages/nosotros/Nosotros";
import React, { useState } from 'react';

function App() {
  const [countCar, setCountCar] = useState(0);

  const agregarAlCarrito = () => {
    setCountCar(countCar + 1);
  }
  return (
    <BrowserRouter>
      <NavBar car={countCar}/>
      {/* <Inicio greeting={'BIENVENIDOS A LA TIENDA DE ROPA DE BEBES DE LOLA'} /> */}
      <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route exact path="/nosotros" element={<Nosotros/>} />
        <Route exact path="/category/bautismos" element={<ItemListContainer sumCarr={agregarAlCarrito}/>} />
        <Route exact path="/" element={<Inicio/>} />
      </Routes>


    </BrowserRouter>

  );
}

export default App;
