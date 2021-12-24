import React, {Component} from "react";
import axios from 'axios';
import styled from "styled-components";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const Styles = styled.div`
 background: #5b79c9;
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
   max-width: 800px;
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
 .label{

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
    componentDidMount(){
        console.log("prueba de Formulario de Reuniones:  ", this.props)
    }
    state={
        ResponsableReunion:'',
        Modalidad:'',
        Fecha: '',
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
        VerificadorArchivo:null,
        TresIdeas:'', 
    }
    onSubmit= async(e) =>{
        e.preventDefault();
        const ReunionsData = new FormData();
        const FileData =new FormData();
        FileData.append('VerificadorArchivo', this.state.VerificadorArchivo);
        ReunionsData.append('ResponsableReunion', this.state.ResponsableReunion);
        ReunionsData.append('Modalidad', this.state.Modalidad);
        ReunionsData.append('Fecha', this.state.Fecha);
        ReunionsData.append('Hora', this.state.Hora);
        ReunionsData.append('Objetivo', this.state.Objetivo);
        ReunionsData.append('Minuta', this.state.Minuta);
        ReunionsData.append('Contraparte', this.state.Contraparte);
        ReunionsData.append('LugarOFormato', this.state.LugarOFormato);
        ReunionsData.append('AsistentesInvitados', this.state.AsistentesInvitados);
        ReunionsData.append('AsistentesPresentes', this.state.AsistentesPresentes);
        ReunionsData.append('CompromisosCRTIC', this.state.CompromisosCRTIC);
        ReunionsData.append('CompromisosContraparte', this.state.CompromisosContraparte);
        ReunionsData.append('VerificadorTipo', this.state.VerificadorTipo);
        ReunionsData.append('TresIdeas', this.state.TresIdeas);
        const first_res = await axios.post("http://localhost:4000/api/FormularioReuniones",ReunionsData, {
            headers: { 'content-type': 'multipart/form-data' }
        }
        )
    }

    onFileChange = (e) =>{
        console.log("El archivo es: ",e.target.files[0]);
        this.setState({
            VerificadorArchivo: e.target.files[0]
        })
    }

    onChangeDate = fecha => {
        this.setState({ fecha });
    }
    
    onInputChange = (e) => {
        console.log("Las reuniones: ",e.target.name ,"Con el valor: ",e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    render(){
        return(
            <Styles>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div>
                        <h1 >Registro de Reuniones</h1>
                        <p>Favor reportar todas las reuniones correspondientes al centro.</p>
                        <p>Favor completar todos los que apliquen para el tipo de reunión.</p>
                        <p>Gracias por ayudar a que el CRT+IC salga adelante.</p>
                        </div>
                        <label>Responsable de la reunion
                        <input 
                        name="ResponsableReunion" 
                        value={this.state.ResponsableReunion}
                        onChange={this.onInputChange}
                        type="text" />
                        </label>
                        <label>
                        Modalidad
                        <select 
                        name="Modalidad" 
                        selected={this.state.Modalidad}
                        onChange={this.onInputChange}>            
                            <option value="Reunion Prescencial">Reunion Prescencial</option>
                            <option value="Reunion Virtual (Conferencia)">Reunion Virtual (Conferencia)</option>
                            <option value="Reunion Virtual (Llamada)">Reunion Virtual (Llamada)</option>
                            <option value="Coordinación vía texto (Mensajería instantánea o cadena de correos)">Coordinación vía texto (Mensajería instantánea o cadena de correos)</option>
                            <option value="Otro">Otro</option>
                        </select>
                        </label>
                        <label>
                        Fecha
                        <input 
                        name="Fecha"
                        type="date" 
                        selected={this.state.Fecha} 
                        onChange={this.onInputChange} />
                        </label>
                        <label>
                        Hora
                        <input 
                        name="Hora"
                        onChange={this.onInputChange} 
                        type="time" 
                        min="00:00" 
                        max="23:59" />
                        </label>
                        <label>
                        Objetivo de la reunion
                        <input 
                        name="Objetivo" 
                        value={this.state.Objetivo}
                        onChange={this.onInputChange}
                        type="text" />
                        </label>
                        <label>
                        Minuta de la Reunion
                        <input 
                        name="Minuta" 
                        value={this.state.Minuta}
                        onChange={this.onInputChange}
                        type="text" />
                        </label>
                        <label>
                        Lugar o Formato
                        <input  
                        name="LugarOFormato" 
                        value={this.state.LugarOFormato}
                        onChange={this.onInputChange}
                        type="text" />
                        </label>
                        <label>
                        Contraparte actividad
                        <input 
                        name="Contraparte" 
                        value={this.state.Contraparte}
                        onChange={this.onInputChange}
                        type="text" />
                        </label>
                        <label>
                        Asistentes invitados
                        <input 
                        name="AsistentesInvitados" 
                        value={this.state.AsistentesInvitados}
                        onChange={this.onInputChange}
                        type="text" />
                        </label>
                        <label>
                        Asistentes presentes
                        <input 
                        name="AsistentesPresentes" 
                        value={this.state.AsistentesPresentes}
                        onChange={this.onInputChange}
                        type="text" />
                        </label>
                        <label>
                        Compromisos CRT+IC
                        <input 
                        name="CompromisosCRTIC" 
                        value={this.state.CompromisosCRTIC}
                        onChange={this.onInputChange}
                        type="text" />
                        </label>
                        <label>
                        Compromisos contraparte
                        <input 
                        name="CompromisosContraparte" 
                        value={this.state.CompromisosContraparte}
                        onChange={this.onInputChange}
                        type="text" />
                        </label>
                        <label>
                        Tipo de verificador
                        <select 
                        name="VerificadorTipo"
                        onChange={this.onInputChange}
                        selected={this.state.VerificadorTipo}>            
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
                        name="TresIdeas"
                        value={this.state.TresIdeas} 
                        onChange={this.onInputChange}
                        type="text" />
                        </label>
                        <label>
                        Archivo Verificador
                        <input  
                        name="VerificadorArchivo" 
                        onChange={this.onFileChange}
                        type="file" />
                        </label>
                        <button 
                        className="submitButton"
                        type="submit" >
                        Ingresar Reunion
                        </button>
                    </form>
                </div>
            </Styles>
        )
    }
}
