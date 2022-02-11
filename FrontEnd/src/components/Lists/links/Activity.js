import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';
import {PDFViewer} from "@react-pdf/renderer";
import ActivitiesPDF from './PDFViewer/ActivitiesPDF';
import Modal from './Modal/Modal';


const Styles = styled.div`
card {
    margin-top: 50px; 
    margin-bottom: 50px;
} 
`;


export default class Activity extends Component {
    constructor(){
        super();
        this.state={
            showPDF: false,
            showModal: false,
            showModalEdit: false
        };
        //Show Data Modal
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

        //Show PDF Modal
        this.showModalPDF = this.showModalPDF.bind(this);
        this.hideModalPDF = this.hideModalPDF.bind(this);
        
        //Show PDF Modal
        this.showModalEdit = this.showModalEdit.bind(this);
        this.hideModalEdit = this.hideModalEdit.bind(this);
    }
    componentDidMount(){
        console.log("prueba de actividades ", this.props)
    }

    //display and close Modal
    showModal = () => {
        this.setState({ showModal: true });
      };
    
    hideModal = () => {
        this.setState({ showModal: false });
      };

    //display and close Modal
    showModalPDF = () => {
        this.setState({ showPDF: true });
    };

    hideModalPDF = () => {
        this.setState({ showPDF: false });
    };

    //display and close Modal
    showModalEdit = () => {
        this.setState({ showModalEdit: true });
    };

    hideModalEdit = () => {
        this.setState({ showModalEdit: false });
    };

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
                    {/*Modal Pop up for the Update in the CRUD*/}
                    <td>
                    <td><Link to={"/actualizarActividades/" + this.props.activity.id} 
                    className="btn btn-primary">
                            Editar
                    </Link>
                    </td> 
                    </td>
                    
                    <td>
                        <button 
                        className="trash alternate outline icon"
                        style={{color: "red", marginTop:" 7px",marginLeft:"10px"}}
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
                    <Modal show={this.state.showModal} handleClose={this.hideModal}>
                        <h1>Responsable de la actividad: {this.props.activity.responsableactividad}</h1>
                        <h2>Objetivo estratégico:{this.props.activity.objetivoestr}</h2>
                        <p>Descripción de la actividad:{this.props.activity.descripcionact}</p>
                        <p>Publico objetivo:{this.props.activity.publicoobj}</p>
                        <p>Contraparte de la actividad{this.props.activity.contraparteact}</p>
                        <p>Mecanismo de convocatoria/ selección:{this.props.activity.mecanismoconv}</p>
                        <p>Lugar de la actividad:{this.props.activity.lugar}</p>
                        <p>Costo total:{this.props.activity.costototal}</p>
                        <p>Aporte solicitado:{this.props.activity.aportesolic}</p>
                        <p>Indicadores de medición:{this.props.activity.indicadoresmed}</p>
                        <p>Porcentaje comprometido:{this.props.activity.proccompr}%</p>
                        <p>Tipo de verificación:{this.props.activity.tipoverific}</p>
                        <p>Fecha:{this.props.activity.fecha}</p>
                        <p>Tipo de actividad:{this.props.activity.tipoact}</p>
                        <p>Ideas de fuerza para la comunicación:{this.props.activity.ideasfuerzacomunicaciones}</p>
                        <p>Objetivo de la actividad:{this.props.activity.objdeactiv}</p>
                    </Modal>
                    <button type="button" className="btn btn-secondary" onClick={this.showModal}>
                        Ver
                    </button>
                    </td> 
                </tr>
        )
    }
}
