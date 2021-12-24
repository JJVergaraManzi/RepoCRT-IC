import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Routes,Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import FormularioReuniones from './components/FormularioReuniones';
import FormularioActividades from './components/FormularioActividades'
import NavBar from './components/Navbar/NavBar';
import editReunions from './components/EditPages/editReunions'
import editActivities from './components/EditPages/editActivities'

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/"  exact element={<Home />} />
          <Route  path="/FormularioReuniones"  element={<FormularioReuniones />} />
          <Route  path="/FormularioActividades"   element={<FormularioActividades />} />
          <Route  path="/editReunions/:id"   element={<editReunions />} />
          <Route  path="/editActivities/:id"   element={<editActivities />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
