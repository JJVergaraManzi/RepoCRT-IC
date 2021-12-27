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
        const NewReunion={
            responsablereunion:this.state.ResponsableReunion,
            modalidad:this.state.Modalidad,
            fecha: this.state.Fecha,
            hora:this.state.Hora,
            //Objetivo:this.state.Objetivo,
            minuta:this.state.Minuta,
            contraparte:this.state.Contraparte,
            lugaroformato:this.state.LugarOFormato,
            asistentesinvitados:this.state.AsistentesInvitados,
            asistentespresentes:this.state.AsistentesPresentes,
            compromisoscrtic:this.state.CompromisosCRTIC,
            compromisoscontraparte:this.state.CompromisosContraparte,
            verificadortipo:this.state.VerificadorTipo,
            VerificadorArchivo:this.stateVerificadorArchivo,
            tresideas:this.state.TresIdeas, 
        };
        const first_res = await axios.post("http://localhost:4000/reuniones",NewReunion
        )
        .then(response =>{
            console.log(response.data)
        })
        .catch(error =>{
            console.log(error.data)
        })
        console.log(NewReunion)
    }

    /*onFileChange = (e) =>{
        console.log("El archivo es: ",e.target.files[0]);
        this.setState({
            VerificadorArchivo: e.target.files[0]
        })
    }*/

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
                        <label>Responsable de la reunión
                        <input 
                        name="ResponsableReunion" 
                        value={this.state.ResponsableReunion}
                        onChange={this.onInputChange}
                        type="text" />
                        </label>
                        <label>
                        Modalidad
                        </label>
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
                        <label>
                        Fecha
                        </label>
                        <input 
                        name="Fecha"
                        type="date" 
                        selected={this.state.Fecha} 
                        onChange={this.onInputChange} />
                        <label>
                        Hora
                        </label>
                        <input 
                        name="Hora"
                        onChange={this.onInputChange} 
                        type="time" 
                        min="00:00" 
                        max="23:59" />
                        <label>
                        Objetivo de la reunión
                        </label>
                        <input 
                        name="Objetivo" 
                        value={this.state.Objetivo}
                        onChange={this.onInputChange}
                        type="text" />
                        <label>
                        Minuta de la reunión
                        </label>
                        <input 
                        name="Minuta" 
                        value={this.state.Minuta}
                        onChange={this.onInputChange}
                        type="text" />
                        <label>
                        Lugar o Formato
                        </label>
                        <input  
                        name="LugarOFormato" 
                        value={this.state.LugarOFormato}
                        onChange={this.onInputChange}
                        type="text" />
                        <label>
                        Contraparte actividad
                        </label>
                        <input 
                        name="Contraparte" 
                        value={this.state.Contraparte}
                        onChange={this.onInputChange}
                        type="text" />
                        <label>
                        Asistentes invitados
                        </label>
                        <input 
                        name="AsistentesInvitados" 
                        value={this.state.AsistentesInvitados}
                        onChange={this.onInputChange}
                        type="text" />
                        <label>
                        Asistentes presentes
                        </label>
                        <input 
                        name="AsistentesPresentes" 
                        value={this.state.AsistentesPresentes}
                        onChange={this.onInputChange}
                        type="text" />
                        <label>
                        Compromisos CRT+IC
                        </label>
                        <input 
                        name="CompromisosCRTIC" 
                        value={this.state.CompromisosCRTIC}
                        onChange={this.onInputChange}
                        type="text" />
                        <label>
                        Compromisos contraparte
                        </label>
                        <input 
                        name="CompromisosContraparte" 
                        value={this.state.CompromisosContraparte}
                        onChange={this.onInputChange}
                        type="text" />
                        <label>
                        Tipo de verificador
                        </label>
                        <select 
                        name="VerificadorTipo"
                        onChange={this.onInputChange}
                        selected={this.state.VerificadorTipo}
                        placeholder="Seleccione su tipo de verificador">            
                            <option value="Fotografías">Fotografías</option>
                            <option value="Lista de asistencia">Lista de asistencia</option>
                            <option value="Registro de actividad">Registro de actividad</option>
                            <option value="Enlaces">Enlaces</option>
                            <option value="Informe de medios">Informe de medios</option>
                            <option value="Informe de programa">Informe de programa</option>
                            <option value="Otro">Otro</option>
                        </select>
                        <label>
                        3 Ideas fuerza para comunicaciones
                        </label>
                        <input 
                        name="TresIdeas"
                        value={this.state.TresIdeas} 
                        onChange={this.onInputChange}
                        type="text" />
                        <label>
                        Archivo Verificador
                        </label>
                        <input  
                        name="VerificadorArchivo" 
                        onChange={this.onFileChange}
                        type="file" />
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
