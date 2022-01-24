import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';
import {PDFViewer} from "@react-pdf/renderer";
import ActivitiesPDF from './PDFViewer/ActivitiesPDF';


const Styles = styled.div`
card {
    margin-top: 50px; 
    margin-bottom: 50px;
} 
`;


export default class Activity extends Component {
    state={
        showPDF: false
    }

    componentDidMount(){
        console.log("prueba de actividades ", this.props)
    }

    //Delete row
    deleteActivity = async (activityId) =>{
        await axios.delete('http://localhost:4000/actividades/'+activityId);
        window.location.href = '/';
    }
    
    //show pdf visualizer
    handleClick = () =>{
        this.setState(state=>({
            showPDF: !state.showPDF
        }));
    }

    render(){
        return(
                <tr >
                    <td>{this.props.activity.responsableactividad}</td>
                    <td>{this.props.activity.objetivoestr}</td>
                    <td>{this.props.activity.fecha}</td>
                    <td>{this.props.activity.lugar}</td>
                    <td>{this.props.activity.mecanismoconv}</td>
                
                        {/*<h4>Responsable de la actividad: {this.props.activity.responsableactividad}</h4>
                        <p> Objetivo estratégico: {this.props.activity.objetivoestr}</p>
                        <p>Descripción de la actividad: {this.props.activity.descripcionact}</p>
                        <p>Publico objetivo: {this.props.activity.publicoobj}</p>
                        Contraparte de la actividad: {this.props.activity.contraparteact}
                        <p>Mecanismo: {this.props.activity.mecanismoconv}
                        <p>Lugar de la actividad: {this.props.activity.lugar}</p>
                        <p>Costo total de la actividad: {this.props.activity.costototal}$</p>
                        <p>Aportes solicitados: {this.props.activity.aportesolic}$</p>
                        <p>Indicadores de medicion: {this.props.activity.indicadoresmed}</p>
                        <p>Porcentaje comprometido de Cumplimiento: {this.props.activity.proccompr}%</p>
                        <p>Tipo de verificación: {this.props.activity.tipoverific}</p>
                        <p>Fecha de realización: {this.props.activity.fecha}</p>
                        <p>Tipo de actividad: {this.props.activity.tipoact}</p>
                        </p>*/}
                    <td>   
                        <Link to={`/Actividades/edit/${this.props.activity.id}`} className="btn btn-secondary">
                                Editar
                        </Link>
                    </td>
                    
                    <td>
                        <button className="btn btn-danger" 
                            onClick={() => this.deleteActivity(this.props.activity.id)}>
                            Eliminar
                        </button>
                    </td>
                    <td>
                        <button 
                        onClick={this.handleClick}>
                            <>{
                                this.state.showPDF ? (
                                    <PDFViewer style={{ width: "100%", height: "90vh" }}>
                                        <ActivitiesPDF activity ={this.props.activity}/>
                                    </PDFViewer>
                                    ): "Ver archivo"
                                    }
                            </>
                        </button>
                    </td>
                    <td>
                    
                    </td> 
                </tr>
        )
    }
}
