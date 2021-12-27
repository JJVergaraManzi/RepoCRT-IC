import React, {Component} from "react";
import axios from 'axios'
import styled from "styled-components";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { Button } from "bootstrap";


const Styles = styled.div`
 background: #c93922;
 padding: 20px;

 h1 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: sans-serif;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   
 }

 label{
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

 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
 }
`;

export default class ActivityForms extends Component{
    componentDidMount(){
        console.log("prueba de Formulario de actividades:  ", this.props)
        
    }
    state={
        ResponsableActividad:'',
        ObjetivoEstr:'',
        DescripcionAct:'',
        PublicoObj:'',
        ContraparteAct:'',
        MecanismoConv:'',
        Lugar:'',
        CostoTotal:'',
        AporteSolic:'',
        IndicadoresMed:'',
        ProcCompr:'',
        TipoVerific:'',
        Fecha:null,
        TipoAct:'',
        ideasfuerzacomunicaciones:''
        //MaterialApoyo:null
    }
    handleFile = (file) => {
        console.log("f", file);
        this.setState({file: file})
    }
    onSubmit= async(e) =>{
        e.preventDefault();
        const NewActivity={
            responsableactividad: this.state.ResponsableActividad,
            objetivoestr: this.state.ObjetivoEstr,
            descripcionact: this.state.DescripcionAct,
            publicoobj: this.state.PublicoObj,
            contraparteact: this.state.ContraparteAct,
            mecanismoconv: this.state.MecanismoConv,
            lugar: this.state.Lugar,
            costototal: this.state.CostoTotal,
            aportesolic: this.state.AporteSolic,
            indicadoresmed: this.state.IndicadoresMed,
            proccompr: this.state.ProcCompr,
            tipoverific: this.state.TipoVerific,
            fecha: this.state.Fecha,
            tipoact: this.state.TipoAct,
            MaterialApoyo: this.state.MaterialApoyo,
            ideasfuerzacomunicaciones:this.state.ideasfuerzacomunicaciones
        };
        console.log("las actividades: ",this.props);
        axios.post('http://localhost:4000/actividades', NewActivity/*,{
            headers: {'content-type': 'multipart/form-data'}
        }*/)
        .then(response =>{
            console.log(response.data)
        })
        .catch(error =>{
            console.log(error.data)
        })
        console.log(NewActivity)
    }
    
    onInputChange = (e) => {
        console.log("Las reuniones: ",e.target.name ,"Con el valor: ",e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onFileChange = (e) =>{
        console.log("Las reuniones: ",this.state.MaterialApoyo , e.target.files[0]);
        this.setState({
            MaterialApoyo: e.target.files[0]
        })
    }
    


    render(){
        return (
            <Styles>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h1>Reporte de Reuniones CRTIC</h1>
                        <p>Favor reportar todas las actividades correspondientes al centro. Ya sean estas actividades individuales, reuniones, eventos, etc.
                        Dependiendo de la actividad hay campos opcionales que no son necesarios. Favor completar todos los que apliquen para el tipo de actividad.
                        Gracias por ayudar a que el CRT+IC salga adelante.</p>
                    </div>
                    <label>Responsable de Actividad</label>
                    <input 
                    onChange={this.onInputChange}
                    name="ResponsableActividad"  
                    value={this.state.ResponsableActividad}
                    type="text"/>
                    
                    <div className="card">
                        <h1>Objetivos Específicos Lineamientos CRT+IC</h1>
                        <p><b>VIGILAR: </b></p>
                        <p>Tendencias, oportunidades y brechas tecnológicas para la innovación creativa
                         Dependiendo de la actividad hay campos opcionales que no son necesarios. Favor completar todos los que apliquen para el tipo de actividad.</p>
                        <p><b>Valorar y valorizar: </b></p>
                        <p>El desarrollo de proyectos creativos de base técnologica para su inserciónen el mercado</p>
                        <p><b>Articular: </b></p>
                        <p>A todos los actores del ecosistema de emprendimiento e innovación para generar instancia de
                          desarrollo y vinculación de las industrias creativas en otros sectores.</p>
                        <p><b>Formar capital humano avanzado:</b></p>
                        <p>Para el fortalecimiento de proyectos de base tecnológica de las industrias creativas.</p>
                        <p><b>Pomover y difundir: </b></p>
                        <p>Los avances, reflexiones y resultados del centro para generar insumos que aporten de manera
                         Contundente a las políticas públicas, la investigación académica y el desarrollo del sector privado.</p>
                    </div>
                   <label> Objetivo Estratégico</label>
                    <select
                    className="form-select form-select-lg mb-3" 
                    name="ObjetivoEstr"
                    selected={this.state.ObjetivoEstr} 
                    onChange={this.onInputChange}>
                        <option >Seleccione su objetivo estratégico</option>            
                        <option value="Vigilar">Vigilar</option>
                        <option value="Articular">Articular</option>
                        <option value="Valorizar">Valorizar</option>
                        <option value="Formar">Formar</option>
                        <option value="Promover">Promover</option>
                        <option value="Difundir">Difundir</option>
                        <option value="Otro">Otro</option>
                    </select>
                    
                    <label>Publico Objetivo</label>
                    <input 
                    onChange={this.onInputChange}
                    name="PublicoObj" 
                    value={this.state.PublicoObj} 
                    type="text"/>
                    <label>Contraparte actividad</label>
                    <input 
                    onChange={this.onInputChange}
                    name="ContraparteAct" 
                    value={this.state.ContraparteAct} 
                    type="text"/>
                    <label>
                    Mecanismo de convocatoria / selección
                    <select
                    className="form-select form-select-lg mb-3" 
                    name="MecanismoConv"
                    selected={this.state.MecanismoConv} 
                    onChange={this.onInputChange}>
                        <option >Seleccione el Mecanismo de convocatoria / selección</option>             
                        <option value="Convocatoria pública abierta">Convocatoria pública abierta</option>
                        <option value="Postulación y selección por comité experto">Postulación y selección por comité experto</option>
                        <option value="Otro">Otro</option>
                    </select>
                    </label>
                    <label>Lugar de realización</label>
                    <input 
                    onChange={this.onInputChange}
                    name="Lugar" 
                    value={this.state.Lugar}
                    type="text"/>
                    <label>Costo Total</label>
                    <input 
                    onChange={this.onInputChange}
                    name="CostoTotal" 
                    value={this.state.CostoTotal}  
                    type="number"/>
                    <label>Aporte Solicitado a 3ros</label>
                    <input 
                    onChange={this.onInputChange}
                    name="AporteSolic" 
                    value={this.state.AporteSolic} 
                    type="number"/>
                    <label>
                    Indicadores de medición
                    <select
                    className="form-select form-select-lg mb-3" 
                    name="IndicadoresMed"
                    selected={this.state.IndicadoresMed} 
                    onChange={this.onInputChange}>       
                        <option >Seleccione el indicadores de medición</option>     
                        <option value="Ejecución presupuestaria">Ejecución presupuestaria</option>
                        <option value="Cumplimiento Actividades comprometidas">Cumplimiento Actividades comprometidas</option>
                        <option value="Cobertura territorial">Cobertura territorial</option>
                        <option value="Incremento usuarios">Incremento usuarios</option>
                        <option value="Satisfacción de usuarios">Satisfacción de usuarios</option>
                        <option value="Otro">Otro</option>
                    </select>
                    </label>
                    <div>
                        <h1 >Porcentaje comprometido de Cumplimiento</h1>
                        <p>Referente a los Indicadores de medición seleccionados anteriormente, indicar un porcentaje de 
                        ejecución a comprometer, este debe ser medible.
                        Por ejemplo:  cumplimiento;  4 talleres, comprometer 100% es realizar 4/4; 
                        </p>
                        </div>
                    <label>Porcentaje comprometido.
                    <input 
                    onChange={this.onInputChange}
                    name="ProcCompr" 
                    value={this.state.ProcCompr} 
                    type="number"
                    placeholder="%"/>%
                    </label>
                    
                    <label>
                    Tipo de verificador
                    <select
                    className="form-select form-select-lg mb-3" 
                    name="TipoVerific"
                    selected={this.state.TipoVerific} 
                    onChange={this.onInputChange}>
                        <option >Seleccione el tipo de verificador</option>               
                        <option value="Fotografías">Fotografías</option>
                        <option value="Lista de asistencia">Lista de asistencia</option>
                        <option value="Registro de actividad">Registro de actividad</option>
                        <option value="Enlaces">Enlaces</option>
                        <option value="Informe de prensa">Informe de prensa</option>
                        <option value="Informe de programa">Informe de programa</option>
                        <option value="Otro">Otro</option>
                    </select>
                    </label>
                    <label>Fecha de actividad
                    <input
                    name="Fecha"
                    type="date"  
                    onChange={this.onInputChange}
                    selected={this.state.Fecha} />
                    </label>
                    <label>Descripción de la actividad / acción
                    <input 
                    onChange={this.onInputChange}
                    name="DescripcionAct" 
                    value={this.state.DescripcionAct} 
                    type="text"/>
                    <label>
                    ideasfuerzacomunicaciones
                    </label>
                    <input 
                    onChange={this.onInputChange}
                    name="ideasfuerzacomunicaciones" 
                    value={this.state.ideasfuerzacomunicaciones} 
                    type="text"/>
                    </label>
                    <label>Material de Apoyo
                    <input 
                    onChange={this.onFileChange}
                    name="MaterialApoyo" 
                    type="file" />
                    </label>
                    <button 
                    className="submitButton"
                    type="submit" >
                    Ingresar Actividad
                    </button>
                </form>
            </Styles>
        )
    }
}