import React, {Component} from "react";
import axios from 'axios';
import styled from "styled-components";
import DatePicker from 'react-datepicker';

const Styles = styled.div`
 background: lavender;
 padding: 20px;

 h1 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: sans-serif;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin-bottom: 5px;
 }

 .error {
   color: red;
   font-family: sans-serif;
   font-size: 12px;
   height: 30px;
 }

 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
 }
`;

export default class ReunionForm extends Component{    
    state={
        ResponsableReunion:'',
        Modalidad:'',
        Fecha:'',
        Hora:'',
        Objetivo:'',
        Minuta:'',
        Contraparte:'',
        LugarOFormato:'',
        AsistentesInvitados:'',
        AsistentesPresentes:'',
        CompromisosCRTIC:'',
        CompromisosContraparte:'',
        VerificadorTipo:'',
        VerificadorArchivo:'',
        IdeasParacomunicaciones:'',
        TresIdeas:'', 
    }
    onSubmit= async(e) =>{
        e.preventDefault();
        const NewForm={
            ResponsableReunion:this.state.ResponsableReunion,
            Modalidad:this.state.Modalidad,
            Fecha:this.state.Fecha,
            Hora:this.state.Hora,
            Objetivo:this.state.Objetivo,
            Minuta:this.state.Minuta,
            Contraparte:this.state.Contraparte,
            LugarOFormato:this.state.LugarOFormato,
            AsistentesInvitados:this.state.AsistentesInvitados,
            AsistentesPresentes:this.state.AsistentesPresentes,
            CompromisosCRTIC:this.state.CompromisosCRTIC,
            CompromisosContraparte:this.state.CompromisosContraparte,
            VerificadorTipo:this.state.VerificadorTipo,
            VerificadorArchivo:this.state.VerificadorArchivo,
            IdeasParacomunicaciones:this.state.IdeasParacomunicaciones,
            TresIdeas:this.state.TresIdeas, 
        };
        axios.post('http://localhost:4000/api/ReunionForm', NewForm);
        window.location.href = '/';
    }
    
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    render(){
        return(
            <Styles>
                <div>
                <h1 className="my-4 font-weight-bold .display-4">Registro de Reuniones</h1>
                    <form>
                        <label>Responsable de la reunion
                        <input 
                        label="Responsable de la reunion" 
                        name="ResponsableReunion" 
                        type="text" />
                        </label>
                        <label>
                        Modalidad
                        <select value={this.state.Modalidad} onChange={this.handleChange}>            
                            <option value="Reunion Prescencial">Reunion Prescencial</option>
                            <option value="Reunion Virtual (Conferencia)">Reunion Virtual (Conferencia)</option>
                            <option value="Reunion Virtual (Llamada)">Reunion Virtual (Llamada)</option>
                            <option value="Coordinación vía texto (Mensajería instantánea o cadena de correos)">Coordinación vía texto (Mensajería instantánea o cadena de correos)</option>
                            <option value="Otro">Otro</option>
                        </select>
                        </label>
                        <label>
                        Fecha
                        <DatePicker 
                        className="form-control" 
                        selected={this.state.date} 
                        onChange={this.onChangeDate} />
                        </label>
                        <label>
                        Hora
                        <input 
                        label="Hora" 
                        name="Hora" 
                        type="time" 
                        min="00:00" 
                        max="23:59" />
                        </label>
                        <label>
                        Objetivo de la reunion
                        <input 
                        label="Objetivo de la reunion" 
                        name="Objetivo de la reunion" 
                        type="text" />
                        </label>
                        <label>
                        Minuta de la Reunion
                        <input 
                        label="Minuta de la Reunion" 
                        name="Minuta de la Reunion" 
                        type="text" />
                        </label>
                        <label>
                        Contraparte actividad
                        <input 
                        label="Contraparte actividad" 
                        name="Contraparte actividad" 
                        type="text" />
                        </label>
                        <label>
                        Asistentes invitados
                        <input 
                        label="Asistentes invitados" 
                        name="Asistentes invitados" 
                        type="text" />
                        </label>
                        <label>
                        Asistentes presentes
                        <input 
                        label="Asistentes presentes" 
                        name="Asistentes presentes" 
                        type="text" />
                        </label>
                        <label>
                        Compromisos CRT+IC
                        <input 
                        label="Compromisos CRT+IC" 
                        name="Compromisos CRT+IC" 
                        type="text" />
                        </label>
                        <label>
                        Compromisos contraparte
                        <input 
                        label="Compromisos contraparte" 
                        name="Compromisos contraparte" 
                        type="text" />
                        </label>
                        <label>
                        Tipo de verificador
                        <select value={this.state.ObjetivoEstr} onChange={this.handleChange}>            
                            <option value="Fotografías">Fotografías</option>
                            <option value="Lista de asistencia">Desarrollo / Planificación / Avance propio</option>
                            <option value="Registro de actividad">Registro de actividad</option>
                            <option value="Enlaces">Enlaces</option>
                            <option value="Informe de medios">Informe de medios</option>
                            <option value="Informe de programa">Informe de programa</option>
                            <option value="Otro">Otro</option>
                        </select>
                        </label>
                        <label>
                        3 Ideas fuerza para comunicaciones
                        <input 
                        label="3 Ideas fuerza para comunicaciones" 
                        name="3 Ideas fuerza para comunicaciones" 
                        type="text" />
                        </label>
                    </form>
                </div>
            </Styles>
        )
    }
}
