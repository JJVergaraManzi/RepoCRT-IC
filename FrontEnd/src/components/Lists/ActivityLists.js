
import React, { Component } from 'react';
import Activity from './links/Activity';
import axios from 'axios';

export default class ActivityList extends Component{
    
    state={
        activities: []
    }

    async componentDidMount(){
        console.log("Log de prueba para activityLists: ",this.props.lista)
    }

    deleteActivity = async (ActivityId) =>{
        await axios.delete('http://localhost:4000/actividades/'+ ActivityId);
        window.location.href = '/';
    }

    render(){
        return(
                
            this.props.lista.map(activity =>(
                <Activity key={activity.id} activity={activity}/>
                ))
            )
    }
}