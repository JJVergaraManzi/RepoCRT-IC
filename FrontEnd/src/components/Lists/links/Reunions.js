import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReunionsPDF from './PDFViewer/ReunionsPDF';
import {PDFViewer} from "@react-pdf/renderer";
import Modal from './Modal/Modal';
import axios from 'axios';

export default class Reunions extends Component {
    constructor(){
        super();
        this.state={
        showPDF: false,
        showModal: false,

    };
    //Show Data Modal
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
        
    //Show PDF Modal
    this.showModalPDF = this.showModalPDF.bind(this);
    this.hideModalPDF = this.hideModalPDF.bind(this);
    }
    componentDidMount(){
        console.log("prueba de reunion ", this.props)
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

    deleteReunion = async (reunionId) =>{
        await axios.delete('http://localhost:4000/reuniones/'+reunionId);
        window.location.href = '/';
    }

    handleClick = () =>{
        this.setState(state=>({
            showPDF: !state.showPDF
        }));
    }
    

    render(){
        return(
            <tr>
                <td>{this.props.reunion.responsablereunion}</td>
                <td>{this.props.reunion.fecha}</td>
                <td>{this.props.reunion.hora}</td>
                <td>{this.props.reunion.lugaroformato} </td>
                <td><Link to={"/actualizarReuniones/" + this.props.reunion.id} 
                    className="btn btn-secondary">
                            Editar
                    </Link>
                </td>
                <td>
                    <button 
                            className="btn btn-danger float-start" 
                            onClick={() => this.deleteReunion(this.props.reunion.id)}>
                                    Eliminar
                    </button>
                </td>
                <td>
                    <button 
                        onClick={this.handleClick}>
                            <>{
                                this.state.showPDF ? (
                                    <PDFViewer style={{ width: "100%", height: "90vh" }}>
                                        <ReunionsPDF reunion ={this.props.reunion}/>
                                    </PDFViewer>
                                    ): "Ver archivo"
                                    }
                            </>
                    </button>
                </td>
                <td>
                    <Modal show={this.state.showModal} handleClose={this.hideModal}>
                        <p>Responsable de la reunión: {this.props.reunion.responsablereunion}</p>
                        <p>Modalidad de la reunión: {this.props.reunion.modalidad}</p>
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
                    </Modal>
                    <button type="button" className="btn btn-secondary" onClick={this.showModal}>
                        Ver
                    </button>
                </td> 
            </tr>  
        )
    }
}
