import React, {Component} from "react";
import axios from 'axios';
import styled from "styled-components";
import { Toaster,toast  } from "react-hot-toast";
import  '../../../../styles/forms/reuniones.css';
import 'react-datepicker/dist/react-datepicker.css'

const Styles = styled.div`
 background: #5b79c9;
 padding: 20px;

`;

export default class ReunionsEdit extends Component{
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

    componentDidMount = async() =>{
        if(this.props.match.params.id){
            const res = await axios.get('http://localhost:4000/actualizarReuniones/' + this.props.match.params.id).
            then(result =>{
                this.setState({
                    responsablereunion:res.data.ResponsableReunion,
                    modalidad:res.data.Modalidad,
                    fecha: res.data.Fecha,
                    hora:res.data.Hora,
                    objetivo:res.data.Objetivo,
                    minuta:res.data.Minuta,
                    contraparte:res.data.Contraparte,
                    lugaroformato:res.data.LugarOFormato,
                    asistentesinvitados:res.data.AsistentesInvitados,
                    asistentespresentes:res.data.AsistentesPresentes,
                    compromisoscrtic:res.data.CompromisosCRTIC,
                    compromisoscontraparte:res.data.CompromisosContraparte,
                    verificadortipo:res.data.VerificadorTipo,
                    tresideas:res.data.TresIdeas 
                })
                .catch(error=>{
                    console.log(error);
                })
            });
            console.log("res.data:",res.data);
        }
    }
    
    update = async(e) =>{
        e.preventDefault();
        const UpdatedReunion={
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
            tresideas:this.state.TresIdeas 
        };

        const res = await axios.put("http://localhost:4000/reuniones",UpdatedReunion)
        .then(response =>{
            console.log("reunion creada con exito")
        })
        .catch(error =>{
            console.log(error.data)
        })
        console.log(UpdatedReunion)
    }
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
                        onChange={this.onInputChange}
                        type="text" />
                        <h5>
                        Modalidad
                        </h5>
                        <select
                        className="form-select form-select-lg mb-3"  
                        name="Modalidad" 
                        selected={this.state.Modalidad}
                        onChange={this.onInputChange}>
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
                        onChange={this.onInputChange} />
                        <h5>
                        Hora
                        </h5>
                        <input 
                        name="Hora"
                        onChange={this.onInputChange} 
                        type="time" 
                        min="00:00" 
                        max="23:59" />
                        <h5>
                        Objetivo de la reunión
                        </h5>
                        <input 
                        name="Objetivo"  
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
