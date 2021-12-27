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
                <p>Responsable de la reunión: {this.props.reunion.responsablereunion}</p>
                <p>Modalidad de la reunión: {this.props.reunion.modalidad}</p>
                <p>Fecha: {this.props.reunion.fecha}</p>
                <p>Hora: {this.props.reunion.hora}</p>
                <p>Objetivo de la reunión: {this.props.reunion.objetivo}</p>
                <p>Minuta de la reunion: {this.props.reunion.minuta}</p>
                <p>Contraparte de la reunion: {this.props.reunion.contraparte}</p>
                <p>Lugar o formato: {this.props.reunion.lugaroformato}</p>
                <p>Asistentes invitados: {this.props.reunion.asistentesinvitados}</p>
                <p>Asistentes presentes: {this.props.reunion.asistentespresentes}</p>
                <p>Compromisos del CRTIC: {this.props.reunion.compromisoscrtic}</p>
                <p>Compromisos de la contraparte: {this.props.reunion.compromisoscontraparte}</p>
                <p>Responsable de la reunion: {this.props.reunion.verificadortipo}</p>
                <p>Tres ideas: {this.props.reunion.tresideas}</p>
            </div>
        )
    }
}
