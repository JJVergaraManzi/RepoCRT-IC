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
            showModal: false
        };
        //Show Data Modal
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        //Show PDF Modal
        this.showModalPDF = this.showModal.bind(this);
        this.hideModalPDF = this.hideModal.bind(this);
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
                    <Modal show={this.state.showModal} handleClose={this.hideModal}>
                        <p>Modal</p>
                    </Modal>
                    <button type="button" onClick={this.showModal}>
                        Open
                    </button>
                    </td> 
                </tr>
        )
    }
}
