import React, { Component } from 'react';

export default class Reunions extends Component {
    componentDidMount(){
        console.log("prueba de reunion ", this.props)
    }
    render(){
        return(
            <div className='card'>
                <p> Responsable de la reunion: {this.props.reunion.attributes.ResponsableReunion}</p>
                <p> Modalidad: {this.props.reunion.attributes.Modalidad}</p>
                <p> Fecha:{this.props.reunion.attributes.Fecha}</p>
                <p> Hora: {this.props.reunion.attributes.Hora}</p>
                <p> Objetivo:{this.props.reunion.attributes.Objetivo}</p>
                <p> Minuta:{this.props.reunion.attributes.Minuta}</p>
                <p> Contraparte:{this.props.reunion.attributes.Contraparte}</p>
                <p> Lugar o formato: {this.props.reunion.attributes.LugarOFormato}</p>
                <p> Asistentes invitados:{this.props.reunion.attributes.AsistentesInvitados}</p>
                <p> Asistentes presentes: {this.props.reunion.attributes.AsistentesPresentes}</p>
                <p> Compromisos del CRTIC: {this.props.reunion.attributes.CompromisosCRTIC}</p>
                <p> {this.props.reunion.attributes.CompromisosContraparte}</p>
                <p> {this.props.reunion.attributes.VerificadorTipo}</p>
                <p> {this.props.reunion.attributes.TresIdeas}</p>
            </div>
        )
    }
}
