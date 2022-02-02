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

const format = (date, locale, options) =>{
    new Intl.DateTimeFormat(locale,options).format(date)
}
const now = new Date()


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
        console.log(now);
    }

    //display ans close Modal
    showModal = () => {
        this.setState({ showModal: true });
      };
    
    hideModal = () => {
        this.setState({ showModal: false });
      };

    //display ans close Modal
    showModalPDF = () => {
        this.setState({ showPDF: true });
    };

    hideModalPDF = () => {
        this.setState({ showPDF: false });
    };

    //display ans close Modal
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
                        <Modal show={this.state.showModalEdit} handleClose={this.hideModalEdit}>
                            <div>
                                <form>
                                    <input 
                                    name="objdeactiv" 
                                    type="text"/>
                                </form>
                            </div>
                        </Modal>  
                        <button type="button" className="btn btn-primary">
                                Editar
                        </button>
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
                        <p>{this.props.activity.responsableactividad}</p>
                        <p>{this.props.activity.objetivoestr}</p>
                        <p>{this.props.activity.descripcionact}</p>
                        <p>{this.props.activity.publicoobj}</p>
                        <p>{this.props.activity.contraparteact}</p>
                        <p>{this.props.activity.mecanismoconv}</p>
                        <p>{this.props.activity.lugar}</p>
                        <p>{this.props.activity.costototal}</p>
                        <p>{this.props.activity.aportesolic}</p>
                        <p>{this.props.activity.indicadoresmed}</p>
                        <p>{this.props.activity.proccompr}</p>
                        <p>{this.props.activity.tipoverific}</p>
                        <p>{this.props.activity.fecha}</p>
                        <p>{this.props.activity.tipoact}</p>
                        <p>{this.props.activity.ideasfuerzacomunicaciones}</p>
                        <p>{this.props.activity.objdeactiv}</p>
                    </Modal>
                    <button type="button" className="btn btn-secondary" onClick={this.showModal}>
                        Ver
                    </button>
                    </td> 
                </tr>
        )
    }
}
