import React, {Component} from "react";
import axios from 'axios';
import styled from "styled-components";
import { Toaster,toast  } from "react-hot-toast";
import { Navigate } from 'react-router-dom';
import  '../../../styles/forms/reuniones.css';
import {uploadFile} from 'react-s3';
import 'react-datepicker/dist/react-datepicker.css'

const Styles = styled.div`
 background: #5b79c9;
 padding: 20px;

`;

const config = {
  bucketName: 'crtic-filestorage',
  //dirName: 'reunions',
  region: 'us-east-2',
  accessKeyId: 'AKIARNEFUJNUKGCIUAII',
  secretAccessKey: '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',
}

export default class ReunionForm extends Component{    
     componentDidMount(){    
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
        editing: false,
        errors:{
            ResponsableReunion:'',
            Modalidad:'',
            Fechas:'',
            Hora:'',
            Minuta:''
          }
    }
    validateReunions = () => {
        let error= {}
        let formIsValid = true
        if(!this.state.ResponsableReunion || this.state.ResponsableReunion.length <3){
            error.ResponsableReunion = "3 caracteres como minimo para el responsable"
            formIsValid = false
          }
      
          if(!this.state.Modalidad || this.state.Modalidad.length <3){
            error.Modalidad = "3 caracteres como minimo para la modalidad"
            formIsValid = false
          }
      
          if(!this.state.Fecha ){
            error.Fechas = "Ingrese la fecha"
            formIsValid = false
          }
      
          if(!this.state.Hora ){
            error.Hora = "Ingrese la hora"
            formIsValid = false
          }
      
          if(!this.state.Minuta ){
            error.Minuta = "¡Ingrese la minuta, por favor!"
            formIsValid = false
          }
      
          this.setState({
            errors: error
          })
          if(formIsValid === false){
          toast.error(
            error.ResponsableReunion +'\n'+ 
            error.Modalidad +'\n'+ 
            error.Fechas+'\n'+ 
            error.Hora+'\n'+ 
            error.Minuta
            )
          return formIsValid
        }else{
          toast.success(
            "Reunion creada con exito"
            )
            document.getElementById("ReunionForm").reset();
            return formIsValid
        }
      };
    onSubmit= async(e) =>{

        e.preventDefault();
        if (!this.validateReunions()){
            return
          }

        const NewReunion={
            responsablereunion:this.state.ResponsableReunion,
            modalidad:this.state.Modalidad,
            fecha: this.state.Fecha,
            hora:this.state.Hora,
            objetivo:this.state.Objetivo,
            minuta:this.state.Minuta,
            contraparte:this.state.Contraparte,
            lugaroformato:this.state.LugarOFormato,
            asistentesinvitados:this.state.AsistentesInvitados,
            asistentespresentes:this.state.AsistentesPresentes,
            compromisoscrtic:this.state.CompromisosCRTIC,
            compromisoscontraparte:this.state.CompromisosContraparte,
            verificadortipo:this.state.VerificadorTipo,
            tresideas:this.state.TresIdeas, 
        };

        const first_res = await axios.post("http://localhost:4000/reuniones",NewReunion
        )
        .then(response =>{
            console.log("reunion creada con exito")
            //despejando los valores
        })
        .catch(error =>{
            console.log(error.data)
        })
        console.log(NewReunion)

        uploadFile( this.state.VerificadorArchivo[0], config)
        .then( (data)=>{
          console.log("datos de S3: ", data);
          this.props.history.push("/");
        })
        .catch((err) =>{
          alert("alerta de S3", err);
        })
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

    resetValue = (e) =>{
      console.log("el valor del state: ", e.target.name, "Ahora tiene un valor de: ", e.target.value)
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
                <div><Toaster 
                position="bottom-right" 
                toastOptions={{
                    duration: 15000,
                    style:{
                      background:"#212121",
                      color:"white"
                    }
                }}/>
                </div>
                <div>
                    <form id="ReunionForm" onSubmit={this.onSubmit}>
                        <div>
                        <h1 >Registro de Reuniones</h1>
                        <p>Favor reportar todas las reuniones correspondientes al centro.
                        Favor completar todos los que apliquen para el tipo de reunión.
                        Gracias por ayudar a que el CRT+IC salga adelante.</p>
                        </div>
                        <h5>
                        Responsable de la reunión
                        </h5>
                        <input 
                        name="ResponsableReunion" 
                        value={this.state.ResponsableReunion}
                        error={this.state.errors.ResponsableReunion}
                        onChange={this.onInputChange}
                        type="text" />
                        <h5>
                        Modalidad
                        </h5>
                        <select
                        className="form-select form-select-lg mb-3"  
                        name="Modalidad" 
                        selected={this.state.Modalidad}
                        onChange={this.onInputChange}
                        error={this.state.errors.Modalidad}>
                            <option >Seleccione la modalidad</option>              
                            <option value="Reunion Prescencial">Reunion Prescencial</option>
                            <option value="Reunion Virtual (Conferencia)">Reunion Virtual (Conferencia)</option>
                            <option value="Reunion Virtual (Llamada)">Reunion Virtual (Llamada)</option>
                            <option value="Coordinación vía texto (Mensajería instantánea o cadena de correos)">Coordinación vía texto (Mensajería instantánea o cadena de correos)</option>
                            <option value="Otro">Otro</option>
                        </select>
                        <h5>
                        Fecha
                        </h5>
                        <input 
                        name="Fecha"
                        type="date" 
                        selected={this.state.Fecha}
                        error={this.state.errors.Fecha} 
                        onChange={this.onInputChange} />
                        <h5>
                        Hora
                        </h5>
                        <input 
                        name="Hora"
                        error={this.state.errors.Hora}
                        onChange={this.onInputChange} 
                        type="time" 
                        min="00:00" 
                        max="23:59" />
                        <h5>
                        Objetivo de la reunión
                        </h5>
                        <input 
                        name="Objetivo" 
                        error={this.state.errors.Objetivo} 
                        value={this.state.Objetivo}
                        onChange={this.onInputChange}
                        type="text" />
                        <h5>
                        Minuta de la reunión
                        </h5>
                        <input 
                        name="Minuta" 
                        value={this.state.Minuta}
                        onChange={this.onInputChange}
                        error={this.state.errors.Minuta}
                        type="text" />
                        <h5>
                        Lugar o Formato
                        </h5>
                        <input  
                        name="LugarOFormato" 
                        value={this.state.LugarOFormato}
                        onChange={this.onInputChange}
                        type="text" />
                        <h5>
                        Contraparte actividad
                        </h5>
                        <input 
                        name="Contraparte" 
                        value={this.state.Contraparte}
                        onChange={this.onInputChange}
                        type="text" />
                        <h5>
                        Asistentes invitados
                        </h5>
                        <input 
                        name="AsistentesInvitados" 
                        value={this.state.AsistentesInvitados}
                        onChange={this.onInputChange}
                        type="text" />
                        <h5>
                        Asistentes presentes
                        </h5>
                        <input 
                        name="AsistentesPresentes" 
                        value={this.state.AsistentesPresentes}
                        onChange={this.onInputChange}
                        type="text" />
                        <div class="col-md-12">
                          <h5>Compromisos CRT+IC </h5>
                          <textarea 
                              cols="40"
                              rows="5"
                              class="form-control mt-2"
                              aria-invalid="false"
                              name="CompromisosCRTIC" 
                              value={this.state.CompromisosCRTIC}
                              onChange={this.onInputChange}
                              placeholder="Inserte la descripción del compromiso del CRT+IC">
                          </textarea>
                        </div>
                        <div class="col-md-12">
                          <h5>Compromisos contraparte</h5>
                          <textarea 
                              cols="40"
                              rows="5"
                              class="form-control mt-2"
                              aria-invalid="false"
                              name="CompromisosContraparte" 
                              value={this.state.CompromisosContraparte}
                              onChange={this.onInputChange}
                              placeholder="Inserte la descripción del compromiso de la contraparte">
                          </textarea>
                        </div>
                        <h5>
                        Tipo de verificador
                        </h5>
                        <select
                        className="form-select form-select-lg mb-3"  
                        name="VerificadorTipo"
                        onChange={this.onInputChange}
                        selected={this.state.VerificadorTipo}
                        placeholder="Seleccione su tipo de verificador">   
                            <option >Seleccione el tipo de verificador</option>             
                            <option value="Fotografías">Fotografías</option>
                            <option value="Lista de asistencia">Lista de asistencia</option>
                            <option value="Registro de actividad">Registro de actividad</option>
                            <option value="Enlaces">Enlaces</option>
                            <option value="Informe de medios">Informe de medios</option>
                            <option value="Informe de programa">Informe de programa</option>
                            <option value="Otro">Otro</option>
                        </select>
                        <h5>
                        3 Ideas fuerza para comunicaciones
                        </h5>
                        <input 
                        name="TresIdeas"
                        value={this.state.TresIdeas} 
                        onChange={this.onInputChange}
                        type="text" />
                        <h5>
                        Archivo Verificador
                        </h5>
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
