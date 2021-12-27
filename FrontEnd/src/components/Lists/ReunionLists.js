import axios from "axios";
import React, { Component } from 'react';
import Reunions from './links/Reunions';

export default class ActivityList extends Component{
    
    state={
        reunions: []
    }

    async componentDidMount(){
        console.log("Log de prueba para activityLists: ",this.props.lista)
        
    }

    deleteReunion = async (ReunionsId) =>{
        await axios.delete('http://localhost:4000/reuniones/'+ ReunionsId);
        window.location.href = '/';
    }

    render(){
        return(
             
            this.props.lista.map(reunion =>(
                    <Reunions key={reunion.id} reunion={reunion}/>

            ))
            
        )
    }
}