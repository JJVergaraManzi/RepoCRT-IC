import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import Stack from '@mui/material/Stack';

export default class Activity extends Component {
    componentDidMount(){
        console.log("prueba de Activity ", this.props)
    }
    render(){
        return(
            
            <div className='card'>
                <h5>La actividad se llevó acabo por: {this.props.activity.attributes.ResponsableActividad}  
                , en la fecha {this.props.activity.attributes.Fecha}</h5>
                <p> Objetivo estrategico: {this.props.activity.attributes.ObjetivoEstr}</p>
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
                <p> </p>
                <p> {this.props.activity.attributes.MecanismoConv}</p>
                <p> {this.props.activity.attributes.lugar}</p>
            </div>
        )
    }
}
