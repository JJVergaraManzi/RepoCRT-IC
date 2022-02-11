import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Routes,Route, useParams } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import FormularioReuniones from './components/Forms/InsertForms/Reuniones/FormularioReuniones';
import ActivityForms from './components/Forms/InsertForms/Actividades/ActivityForms';
import FormularioActividades from './components/Forms/InsertForms/Actividades/FormularioActividades';
import ClassUE4 from './components/Forms/InsertForms/Clases/class';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Commons/Footer/Footer.js';
import Contact from './components/Commons/Contact/Contact.js';
import ReunionsForms from './components/Forms/InsertForms/Reuniones/ReunionsForms';

function App() {
  let {id}= useParams();
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route  path="/"  exact element={<Home />} />
          <Route  path="/Reuniones"  element={<ReunionsForms />} />
          <Route  path="/Actividades"   element={<ActivityForms />} />
          <Route  path="/Clases"   element={<ClassUE4 />} />
          <Route  path="/Contact"  element={<Contact />} />
          <Route  path="/actualizarActividades/:id"  element={<ActivityForms match={id}/> } />
          <Route  path="/actualizarReuniones/:id"   element={<ReunionsForms match={id}/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
