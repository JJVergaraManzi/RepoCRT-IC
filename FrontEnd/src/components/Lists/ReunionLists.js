import axios from "axios";
import React, { Component } from 'react';
import Reunions from './links/Reunions';

export default class ActivityList extends Component{
    constructor(){
        super();
        this.state={
            reunions: [],
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    async componentDidMount(){
        console.log("Log de prueba para activityLists: ",this.props.lista)
        
    }

    showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

    deleteReunion = async (ReunionsId) =>{
        await axios.delete('http://localhost:4000/reuniones/'+ ReunionsId);
        window.location.href = '/';
    }

    render(){
        return(
            <div className="d-flex flex-row">
                <div className="row g-3 ms-auto">
                    <h5>Reuniones</h5>
                    <form className="row g-3 ms-auto">
                    <div className="col-auto">
                        <input
                        type="text"
                        className="form-control ms-auto"
                        placeholder="Busque su Reunión"
                        />
                    </div>
                    </form>

                    <table className="table table-bordered border-primary table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Responsable de la reunión</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                                <th scope="col">Lugar o Formato</th>
                                <th scope="col">Eliminar Fila</th>
                                <th scope="col">Editar Fila</th>
                                <th scope="col">Descargar PDF</th>
                                <th scope="col">Detalles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.lista.map(reunion =>(
                                    <Reunions key={reunion.id} reunion={reunion}/>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}