import React, { Component } from 'react';

export default class Activity extends Component {
    componentDidMount(){
        console.log("prueba de Activity ", this.props)
    }
    render(){
        return(
            <div className='card'>
                <p> Responsable de la actividad: {this.props.activity.attributes.ResponsableActividad}</p>
                <p> Objetivo estrategitoc: {this.props.activity.attributes.ObjetivoEstr}</p>
                <p> {this.props.activity.attributes.TipoAct}</p>
                <p> {this.props.activity.attributes.ObjetivoAct}</p>
                <p> {this.props.activity.attributes.DescripcionAct}</p>
                <p> {this.props.activity.attributes.PublicoObj}</p>
                <p> {this.props.activity.attributes.ContraparteAct}</p>
                <p> {this.props.activity.attributes.CostoTotal}</p>
                <p> {this.props.activity.attributes.IndicadoresMed}</p>
                <p> {this.props.activity.attributes.AporteSolic}</p>
                <p> {this.props.activity.attributes.ProcCompr}</p>
                <p> {this.props.activity.attributes.TipoVerific}</p>
                <p> {this.props.activity.attributes.Fecha}</p>
                <p> {this.props.activity.attributes.MecanismoConv}</p>
                <p> {this.props.activity.attributes.lugar}</p>
            </div>
        )
    }
}
