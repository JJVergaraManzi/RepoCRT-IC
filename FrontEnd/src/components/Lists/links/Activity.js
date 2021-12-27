import axios from 'axios';
import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

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
                <Accordion>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>Simple title</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <p>Body content</p>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>
            <div className="card-header d-flex justify-content-between">
                <button className="btn btn-danger" onClick={() => this.deleteActivity(this.props.activity.id)}>
                Delete
            </button>
            </div>
                <p>{this.props.activity.responsableactividad}</p>
            </div>
        )
    }
}
