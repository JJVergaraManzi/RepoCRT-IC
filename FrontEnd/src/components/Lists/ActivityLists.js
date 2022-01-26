
import React, { Component } from 'react';
import Activity from './links/Activity';
import axios from 'axios';

export default class ActivityList extends Component{
    
    state={
        activities: [],
        popUp: false
    }

    async componentDidMount(){
        console.log("Log de prueba para activityLists: ",this.props.lista)
    }

    deleteActivity = async (ActivityId) =>{
        await axios.delete('http://localhost:4000/actividades/'+ ActivityId);
        window.location.href = '/';
    }

    render(){
        return(
            <div className="d-flex flex-row">
                <div className="row g-3 ms-auto">
                    <h5>Actividades</h5>
                    <form className="row g-3 ms-auto">
                    <div className="col-auto center">
                        <input
                        type="text"
                        className="form-control ms-auto"
                        placeholder="Encuentre su actividad"
                        />
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
                        {this.props.lista.map(activity =>(
                            <Activity key={activity.id} activity={activity}/>
                            ))}
                    </tbody>
                    </table>
                </div>
            </div>
            )
    }
}