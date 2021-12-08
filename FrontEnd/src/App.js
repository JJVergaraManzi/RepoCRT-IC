import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom' 


import './App.css';
import {FormularioReuniones} from './components/FormularioReuniones';
import {FormularioActividades} from './components/FormularioActividades'
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container p-4">
        <Route path="/FormularioReuniones" component={FormularioReuniones} />
        <Route path="/FormularioActividades" component={FormularioActividades} />
      </div>
    </Router>
  );
}

export default App;
