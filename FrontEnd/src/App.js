import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Routes,Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import FormularioReuniones from './components/Forms/Reuniones/FormularioReuniones';
import FormularioActividades from './components/Forms/Actividades/FormularioActividades';
import Clases from './components/Forms/Clases/Clases';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Commons/Footer/Footer.js';
import Contact from './components/Commons/Contact/Contact.js';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route  path="/"  exact element={<Home />} />
          <Route  path="/Reuniones"  element={<FormularioReuniones />} />
          <Route  path="/Actividades"   element={<FormularioActividades />} />
          <Route  path="/Clases"   element={<Clases />} />
          <Route  path="/Contact"  element={<Contact />} />
          <Route  path="/editActividades/:id"   element={<FormularioActividades />} />
          <Route  path="/editReuniones/:id"   element={<FormularioReuniones />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
