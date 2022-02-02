
import React, { useState, useEffect } from 'react';
import Activity from './links/Activity';
import DownloadReunions from './DownloadExcel/DownloadReunions';
import axios from 'axios';
import DownloadActivities from './DownloadExcel/DownloadActivities';

const ActivityList = (props)=>{
    const [data, setData] =useState(props.lista);
    const [query, setQuery] =useState('')

    /*useEffect(()=>{
        fetch('http://localhost:4000/actividades/')
        .then((res)=> res.json())
        .then((json)=> setData(json))

    }, []);*/
    /*state={
        activities: [],
        query:"",
        popUp: false
    }*/

    /*const componentDidMount= async() =>{
        console.log("Log de prueba para activityLists: ",this.props.lista)
    };

    const deleteActivity = async (ActivityId) =>{
        await axios.delete('http://localhost:4000/actividades/'+ ActivityId);
        window.location.href = '/';
    }*/

   /* const search = (query) =>{

        return data.filter((row) =>
        row.responsableactividad.toLowerCase().indexOf(query) >-1 ||
        row.objetivoestr.toLowerCase().indexOf(query) >-1 ||
        row.fecha.toLowerCase().indexOf(query) >-1 ||
        rowlug.ar.toLowerCase().indexOf(query) >-1 
        );
    }*/

    const handleChange = (event) => {
        setQuery(event.target.value);
        setData(props.lista.filter(elem => elem.responsableactividad.toLowerCase().startsWith(event.target.value)));
    }

        return(
            <div className="d-flex flex-row">
                <div className="row g-3 ms-auto">
                    <h5>Actividades</h5>
                    <form className="row g-3 ms-auto">
                    <div className="col-auto center">
                        <input
                        defaultValue={''}
                        value={query}
                        onChange={(e) => handleChange(e)}
                        type="text"
                        className="form-control ms-auto"
                        placeholder="Encuentre su actividad"
                        />
                    <div>
                        <DownloadReunions excelData={props.lista}>
                        </DownloadReunions>
                    </div>
                    </div>
                    </form>
                    <table className="table table-bordered border-primary table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Responsable de la actividad</th>
                                <th scope="col">Objetivo estratégico</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Lugar de la actividad </th>
                                <th scope="col">Eliminar Fila</th>
                                <th scope="col">Editar Fila</th>
                                <th scope="col">Descargar PDF</th>
                                <th scope="col">Detalles</th>
                            </tr>
                        </thead>
                        <tbody>    
                            { console.log("prueba de this.props.lista: ") || data.map(activity =>(
                                <Activity key={activity.id} activity={activity}/>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            )
}

export default ActivityList;