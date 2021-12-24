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
        TipoAct:'',
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
        MaterialApoyo:null
    }
    
    onSubmit= async(e) =>{
        e.preventDefault();
        const NewActivity={
            ResponsableActividad: this.state.ResponsableActividad,
            ObjetivoEstr: this.state.ObjetivoEstr,
            TipoAct: this.state.TipoAct,
            DescripcionAct: this.state.DescripcionAct,
            PublicoObj: this.state.PublicoObj,
            ContraparteAct: this.state.ContraparteAct,
            MecanismoConv: this.state.MecanismoConv,
            Lugar: this.state.Lugar,
            CostoTotal: this.state.CostoTotal,
            AporteSolic: this.state.AporteSolic,
            IndicadoresMed: this.state.IndicadoresMed,
            ProcCompr: this.state.ProcCompr,
            TipoVerific: this.state.TipoVerific,
            Fecha: this.state.Fecha,
            MaterialApoyo: this.state.MaterialApoyo
        };
        console.log("las actividades: ",this.props);
        axios.post('http://localhost:4000/api/FormularioActividades', NewActivity,{
            headers: {'content-type': 'multipart/form-data'}
        })
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
    onChangeDate = fecha => {
        this.setState({ fecha });
    }
    


    render(){
        return (
            <Styles>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h1>Reporte de Reuniones CRTIC</h1>
                        <p>Favor reportar todas las actividades correspondientes al centro. Ya sean estas actividades individuales, reuniones, eventos, etc.</p>
                        <p>Dependiendo de la actividad hay campos opcionales que no son necesarios. Favor completar todos los que apliquen para el tipo de actividad.</p>
                        <p>Gracias por ayudar a que el CRT+IC salga adelante.</p>
                    </div>
                    <label>Responsable de Actividad</label>
                    <input 
                    onChange={this.onInputChange}
                    name="ResponsableActividad"  
                    value={this.state.ResponsableActividad}
                    type="text"/>
                    
                    <div className="card">
                        <h1>Objetivos Específicos Lineamientos CRT+IC</h1>
                        <p>VIGILAR: </p>
                        <p>Tendencias, oportunidades y brechas tecnológicas para la innovación creativa</p>
                        <p>Dependiendo de la actividad hay campos opcionales que no son necesarios. Favor completar todos los que apliquen para el tipo de actividad.</p>
                        <p>Valorar y valorizar: </p>
                        <p>El desarrollo de proyectos creativos de base técnologica para su inserciónen el mercado</p>
                        <p>Articular:</p>
                        <p>A todos los actores del ecosistema de emprendimiento e innovación para generar instancia de</p>
                        <p>desarrollo y vinculación de las industrias creativas en otros sectores.</p>
                        <p>Formar capital humano avanzado:</p>
                        <p>Para el fortalecimiento de proyectos de base tecnológica de las industrias creativas.</p>
                        <p>Pomover y difundir: </p>
                        <p>Los avances, reflexiones y resultados del centro para generar insumos que aporten de manera</p>
                        <p>Contundente a las políticas públicas, la investigación académica y el desarrollo del sector privado.</p>
                    </div>
                    Objetivo Estratégico
                    <select 
                    name="ObjetivoEstr"
                    selected={this.state.ObjetivoEstr} 
                    onChange={this.onInputChange}>            
                        <option value="Vigilar">Vigilar</option>
                        <option value="Articular">Articular</option>
                        <option value="Valorizar">Valorizar</option>
                        <option value="Formar">Formar</option>
                        <option value="Promover">Promover</option>
                        <option value="Difundir">Difundir</option>
                        <option value="Otro">Otro</option>
                    </select>
                    <label>
                    Tipo de actividad/ acción
                    <select 
                    name="TipoAct"
                    value={this.state.TipoAct} 
                    onChange={this.onInputChange}>            
                        <option value="Taller">Taller</option>
                        <option value="Desarrollo / Planificación / Avance propio">Desarrollo / Planificación / Avance propio</option>
                        <option value="Festival">Festival</option>
                        <option value="Concierto">Concierto</option>
                        <option value="Seminario">Seminario</option>
                        <option value="Difundir">Difundir</option>
                        <option value="Laboratorio">Laboratorio</option>
                        <option value="Entrenamiento">Entrenamiento</option>
                        <option value="Otro">Otro</option>
                    </select>
                    </label>
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
                    name="MecanismoConv"
                    selected={this.state.MecanismoConv} 
                    onChange={this.onInputChange}>            
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
                    name="IndicadoresMed"
                    selected={this.state.IndicadoresMed} 
                    onChange={this.onInputChange}>            
                        <option value="Ejecución presupuestaria">Ejecución presupuestaria</option>
                        <option value="Cumplimiento Actividades comprometidas">Cumplimiento Actividades comprometidas</option>
                        <option value="Cobertura territorial">Cobertura territorial</option>
                        <option value="Incremento usuarios">Incremento usuarios</option>
                        <option value="Satisfacción de usuarios">Satisfacción de usuarios</option>
                        <option value="Otro">Otro</option>
                    </select>
                    </label>
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
                    name="TipoVerific"
                    selected={this.state.TipoVerific} 
                    onChange={this.onInputChange}>            
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
                    onChange={this.onChangeDate}
                    selected={this.state.Fecha} />
                    </label>
                    <label>Descripción de la actividad / acción
                    <input 
                    onChange={this.onInputChange}
                    name="DescripcionAct" 
                    value={this.state.DescripcionAct} 
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