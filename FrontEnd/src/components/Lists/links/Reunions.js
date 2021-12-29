import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';

const Styles = styled.div`
card {
    margin-down: .5rem; 
    margin-up: .5rem; 
`;

export default class Reunions extends Component {
    componentDidMount(){
        console.log("prueba de reunion ", this.props)
    }
    deleteReunion = async (reunionId) =>{
        await axios.delete('http://localhost:4000/reuniones/'+reunionId);
        window.location.href = '/';
    }
    

    render(){
        return(
            <Styles>
                <div className='card'>
                    <div className="card-header d-flex justify-content-between">
                        <button className="btn btn-danger" onClick={() => this.deleteReunion(this.props.reunion.id)}>
                                Eliminar
                            </button> 
                          <h4> Fecha:{this.props.reunion.fecha}</h4> 
                    </div>
                    <div className="card-body">
                        <h4></h4>
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
                    <div className="card-footer">   
                    <Link to={"/FormularioReuniones/edit/" + this.props.reunion.id} className="btn btn-secondary">
                            Editar
                    </Link>
                    </div>
                </div>
            </Styles>
        )
    }
}
