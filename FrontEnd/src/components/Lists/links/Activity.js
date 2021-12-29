import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';

const Styles = styled.div`
card {
    margin-top: 50px; 
    margin-bottom: 50px;
} 
`;


export default class Activity extends Component {
    componentDidMount(){
        console.log("prueba de actividades ", this.props)
    }
    deleteActivity = async (activityId) =>{
        await axios.delete('http://localhost:4000/actividades/'+activityId);
        window.location.href = '/';
    }
    render(){
        return(
            <Styles>
                <div className='card'>
                <div className="card-header d-flex justify-content-between">
                    <button className="btn btn-danger" onClick={() => this.deleteActivity(this.props.activity.id)}>
                    Eliminar
                </button>
                <h4>Fecha:{this.props.activity.fecha}</h4>
                </div>
                <div className="card-body">
                        <h4>Responsable de la actividad: {this.props.activity.responsableactividad}</h4>
                        <p> Objetivo estratégico: {this.props.activity.objetivoestr}</p>
                        <p>Descripción de la actividad: {this.props.activity.descripcionact}</p>
                        <p>Publico objetivo: {this.props.activity.publicoobj}</p>
                        Contraparte de la actividad: {this.props.activity.contraparteact}
                        <p>Mecanismo: {this.props.activity.mecanismoconv}
                        <p>Lugar de la actividad: {this.props.activity.lugar}</p>
                        <p>Costo total de la actividad: {this.props.activity.costototal} </p>
                        <p>Aportes solicitados: {this.props.activity.aportesolic}</p>
                        <p>Indicadores de medicion: {this.props.activity.indicadoresmed}</p>
                        <p>Porcentaje comprometido de Cumplimiento: {this.props.activity.proccompr}</p>
                        <p>Tipo de verificación: {this.props.activity.tipoverific}</p>
                        <p>Fecha de realización: {this.props.activity.fecha}</p>
                        <p>Tipo de actividad: {this.props.activity.tipoact}</p>
                        </p>
                    </div>
                    <div className="card-footer">   
                    <Link to={`/FormularioActividades/edit/${this.props.activity.id}`} className="btn btn-secondary">
                            Editar
                    </Link>
                    </div>
                </div>
            </Styles>
        )
    }
}
