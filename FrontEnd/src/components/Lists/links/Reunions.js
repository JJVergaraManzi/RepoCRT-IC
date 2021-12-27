import React, { Component } from 'react';
import axios from 'axios';

export default class Reunions extends Component {
    componentDidMount(){
        console.log("prueba de reunion ", this.props)
    }
    deleteReunion = async (ReunionId) =>{
        await axios.delete('http://localhost:4000/reuniones'+ ReunionId);
        this.getActivities();
    }
    

    render(){
        return(
            <div className='card'>
            <div className="card-header d-flex justify-content-between">
                <button className="btn btn-danger" onClick={() => this.deleteReunion(this.props.reunion.id)}>
                Eliminar
            </button>
            </div>
            <h4>Fecha:{this.props.reunion.fecha}</h4>
                <p>{this.props.reunion.responsablereunion}</p>
            </div>
        )
    }
}
