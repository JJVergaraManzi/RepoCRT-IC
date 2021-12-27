import axios from "axios";
import React, { Component } from 'react';
import Reunions from './links/Reunions';

export default class ActivityList extends Component{
    
    state={
        reunions: []
    }

    async componentDidMount(){
        console.log("Log de prueba para activityLists: ",this.props.lista)
        /*const res = await axios.get('http://localhost:1337/api/reunions-forms')
        //console.log("primer log: ", res.data.data[0].attributes)
        this.setState({
            reunions : res.data.data
        });
        console.log("segundo log",this.state.reunions)*/
    }

    deleteActivity = async (ReunionsId) =>{
        await axios.delete('http://localhost:4000/reuniones'+ ReunionsId);
        this.getreunions();
    }

    render(){
        return(
                
                    this.props.lista.map(reunion =>(
                        <Reunions key={reunion.id} reunion={reunion}/>
                    ))
                
        )
    }
}