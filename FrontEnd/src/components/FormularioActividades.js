import React, {Component} from "react";
import axios from 'axios'
import styled from "styled-components";

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

 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
 }
`;

export default class ActivityForms extends Component{
    state={
        ResponsableActividad:'',
        ObjetivoEstr:'',
        TipoAct:'',
        ObjetivoAct:'',
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
        Fecha:'',
        Idea:'',
        MaterialApoyo:null
    }
    
    onSubmit= async(e) =>{
        e.preventDefault();
        const NewActivity={
            ResponsableActividad: this.state.ResponsableActividad,
            ObjetivoEstr: this.state.ObjetivoEstr,
            TipoAct: this.state.TipoAct,
            ObjetivoAct: this.state.ObjetivoAct,
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
            Idea: this.state.Idea,
            MaterialApoyo: this.state.MaterialApoyo
        };
        axios.post('http://localhost:4000/api/ActivitiesForm', NewActivity);
        window.location.href = '/';
    }
    
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
                    name="Responsable de 
                    Actividad"  value={this.state.ResponsableActividad}/>
                    <label>
                    
                    <div>
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
                    <select value={this.state.ObjetivoEstr} onChange={this.handleChange}>            
                        <option value="Vigilar">Vigilar</option>
                        <option value="Articular">Articular</option>
                        <option value="Valorizar">Valorizar</option>
                        <option value="Formar">Formar</option>
                        <option value="Promover">Promover</option>
                        <option value="Difundir">Difundir</option>
                        <option value="Otro">Otro</option>
                    </select>
                    </label>
                    <label>
                    Tipo de actividad/ acción
                    <select value={this.state.ObjetivoEstr} onChange={this.handleChange}>            
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
                    name="Publico Objetivo" 
                    value={this.state.ObjetivoEstr} />
                    <label>Contraparte actividad</label>
                    <input 
                    name="Contraparte actividad" 
                    value={this.state.ObjetivoEstr} />
                    <label>
                    Mecanismo de convocatoria / selección
                    <select value={this.state.MecanismoConv} onChange={this.handleChange}>            
                        <option value="Convocatoria pública abierta">Convocatoria pública abierta</option>
                        <option value="Postulación y selección por comité experto">Postulación y selección por comité experto</option>
                        <option value="Otro">Otro</option>
                    </select>
                    </label>
                    <label>Lugar de realización</label>
                    <input 
                    name="Lugar de realización" 
                    value={this.state.Lugar}/>
                    <label>Costo Total</label>
                    <input 
                    name="Costo Total" 
                    value={this.state.CostoTotal}  />
                    <label>Aporte Solicitado a 3ros</label>
                    <input 
                    name="Aporte Solicitado a 3ros" 
                    value={this.state.AporteSolic} />
                    <label>
                    Indicadores de medición
                    <select value={this.state.IndicadoresMed} onChange={this.handleChange}>            
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
                    name="Porcentaje comprometido." 
                    value={this.state.ObjetivoEstr} />
                    </label>
                    <label>Descripción de la actividad / acción
                    <input 
                    name="Descripción de la actividad / acción" 
                    value={this.state.ObjetivoEstr} />
                    </label>
                    <label>Fecha de actividad
                    <input 
                    name="Fecha de actividad" 
                    value={this.state.ObjetivoEstr} />
                    </label>
                    <label>Descripción de la actividad / acción
                    <input 
                    name="Descripción de la actividad / acción" 
                    value={this.state.ObjetivoEstr} />
                    </label>
                    <input type="submit" placeholder="Enviar formulario" />
                </form>
            </Styles>
        )
    }
}