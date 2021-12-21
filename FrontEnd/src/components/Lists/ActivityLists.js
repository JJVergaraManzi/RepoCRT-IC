import axios from "axios";
import React, { Component } from 'react';
import Activity from './links/Activity';

export default class ActivityList extends Component{
    
    state={
        activities: []
    }

    async componentDidMount(){
        console.log("Log de prueba",this.props.lista)
        /*const res = await axios.get('http://localhost:1337/api/activities-forms')
        //console.log("primer log: ", res.data.data[0].attributes)
        this.setState({
            activities : res.data.data
        });
        console.log("segundo log",this.state.activities)*/
    }

    deleteActivity = async (ActivityId) =>{
        await axios.delete('http://localhost:1337/api/activities-forms/'+ ActivityId);
        this.getActivities();
    }

    render(){
        return(
                
                    this.props.lista.map(activity =>(
                        <Activity key={activity.id} activity={activity}/>
                    ))
                
        )
    }
}