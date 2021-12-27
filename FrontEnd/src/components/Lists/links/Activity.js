import axios from 'axios';
import React, { Component } from 'react';

export default class Activity extends Component {
    componentDidMount(){
        console.log("prueba de actividades ", this.props)
    }
    getActivity = async () =>{
        const res = await axios.get('http://localhost:4000/actividades')
    }
    deleteActivity = async (activityId) =>{
        await axios.delete('http://localhost:4000/actividades/'+activityId);

    }
    render(){
        return(
            
            <div className='card'>
            <div className="card-header d-flex justify-content-between">
                <button className="btn btn-danger" onClick={() => this.deleteActivity(this.props.activity.id)}>
                Eliminar
            </button>
            </div>
            <h4>Fecha:{this.props.activity.fecha}</h4>
                <p>Responsable de la actividad:{this.props.activity.responsableactividad}</p>
                <p> Objetivo estratégico: {this.props.activity.objetivoestr}</p>
                <p>Descripción de la actividad: {this.props.activity.descripcionact}</p>
                 <p>Publico objetivo: {this.props.activity.publicoobj}</p>
                 Contraparte de la actividad: {this.props.activity.contraparteact}
                 <p>Mecanismo: {this.props.activity.mecanismoconv}
                 <p>Lugar de la actividad: {this.props.activity.lugar}</p>
                 <p>Costo total de la actividad:{this.props.activity.costototal} </p>
                 <p>Aportes solicitados: {this.props.activity.aportesolic}</p>
                 <p>Indicadores de medicions{this.props.activity.indicadoresmed}</p>
                 <p>Porcentaje comprometido de Cumplimiento: {this.props.activity.proccompr}</p>
                 <p>Tipo de verificación{this.props.activity.tipoverific}</p>
                 <p>Fecha de realización:{this.props.activity.fecha}</p>
                 <p>Tipo de actividad: {this.props.activity.tipoact}</p>
                </p>
            </div>
        )
    }
}
