import React , {Component} from "react";
import {Inject, ScheduleComponent,Day,Week,WorkWeek,Month,Agenda,ExcelExport} from '@syncfusion/ej2-react-schedule';
import axios from "axios";


export default class Scheduler extends Component{
    state={
        reunions:[],
        activities:[],
        allDates: []
    };
    componentDidMount= async () => {
        const reuDates= await axios.get('http://localhost:4000/reuniones')
        this.setState({
            reunions: reuDates.data.reuniones
        })
        console.log("Reuniones para el calendario:", this.state.reunions)

        const actDates= await axios.get('http://localhost:4000/actividades')
        this.setState({
            activities: actDates.data.actividades
        })
        console.log("Actividades para el calendario:", this.state.activities)
        this.setState({
            allDates: [...reuDates.data.reuniones, ...actDates.data.actividades] 
        })
        console.log('El total del arreglo es', this.state.allDates)
    }
    render(){
        return(
            <ScheduleComponent currentView="Month">
                <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
            </ScheduleComponent>
        );
    }
}