import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import ContactInfo from "./components/Contact";
import Checkout from "./components/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          {/* Ruta de error 404*/}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/Contacto" element={<ContactInfo />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
