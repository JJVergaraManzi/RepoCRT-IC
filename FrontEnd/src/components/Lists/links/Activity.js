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
                <p>{this.props.activity.responsableactividad}</p>
            </div>
        )
    }
}
