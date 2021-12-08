import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Routes,Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import FormularioReuniones from './components/FormularioReuniones';
import FormularioActividades from './components/FormularioActividades'
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/"  exact component={<Home />} />
          <Route  path="/FormularioReuniones"  element={<FormularioReuniones />} />
          <Route  path="/FormularioActividades"   element={<FormularioActividades />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
