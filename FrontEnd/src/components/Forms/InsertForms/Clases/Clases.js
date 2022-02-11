import React, { useState } from "react";
import axios from "axios";
import '../../../../styles/forms/classes.css';
var globalRegex = /^\d{1,3}(?:\.\d{1,3}){2}-[\dkK]$/



const Clases = () =>{
    const [rut, setRut] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [date, setDate] = useState('');
    const [inscritos, setInscritos] = useState('');
    const [asistentes, setAsistentes] = useState('');
    
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    const handleSubmit = () =>{
        setLoading(true);
        setIsError(false);
        const data = {
            rut: rut,
            nombre: name,
            apellido: lastName,
            fecha: date,
            estudiantesinscritos: inscritos,
            estudiantesasistentes: asistentes,
        }
        axios.post('http://localhost:4000/clases', data).then(res => {
                setData(res.data);

                setRut('');
                setName('');
                setLastName('');
                setDate('');
                setInscritos('');
                setAsistentes('');

                setLoading(false);
              }).catch(err => {
                setLoading(false);
                setIsError(true);

                console.warn(err.data.message)
              });
    }
    console.log("Prueba de datos para las clases: ",data);
    return (
          <div style={{ maxWidth: 350 }}>
            <div classNames="form-group">
              <label htmlFor="rut">Rut</label>
              <input
                type="text"
                className="form-control"
                id="rut"
                placeholder="entre su rut"
                value={rut}
                onChange={e => setRut(e.target.value)} />
                {console.log(setRut)}
            </div>
            <div classNames="form-group">
              <label htmlFor="Name" className="mt-2">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="ingrese el nombre del profesor"
                value={name}
                onChange={e => setName(e.target.value)} />
                {console.log(setName)}
            </div>
            <div classNames="form-group">
              <label htmlFor="lastName" className="mt-2">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="ingrese el apellido del profesor"
                value={lastName}
                onChange={e => setLastName(e.target.value)} />
                {console.log(setLastName)}
            </div>
            <div classNames="form-group">
              <label htmlFor="date" className="mt-2">Fecha de las clases</label>
              <input
                type="date"
                className="form-control"
                id="nombre"
                placeholder="ingrese la fecha de la clase"
                value={date}
                onChange={e => setDate(e.target.value)} />
                {console.log(setDate)}
            </div>
            <div classNames="form-group">
              <label htmlFor="inscritos" className="mt-2">Alumnos inscritos en la clase</label>
              <input
                type="inscritos"
                className="form-control"
                id="inscritos"
                placeholder="ingrese la cantidad de alumnos inscritos en la clase"
                value={inscritos}
                onChange={e => setInscritos(e.target.value)} />
                {console.log(setInscritos)}
            </div>
            <div classNames="form-group">
              <label htmlFor="asistentes" className="mt-2">Alumnos asistentes en la clase</label>
              <input
                type="asistentes"
                className="form-control"
                id="asistentes"
                placeholder="ingrese la cantidad de alumnos asistentes en la clase"
                value={asistentes}
                onChange={e => setAsistentes(e.target.value)} />
                {console.log(setAsistentes)}
            </div>
            {isError && <small className="mt-3 d-inline-block text-danger">Hubo un error, ingrese los datos correctamente por favor..</small>}
            <button
              type="submit"
              className="btn btn-primary mt-3"
              onClick={handleSubmit}
              disabled={loading}
            >{loading ? 'Loading...' : 'Submit'}</button>
            {data && <div className="mt-3">
              <strong>Output:</strong><br />
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
            }
          </div>
      );
}
export default Clases;