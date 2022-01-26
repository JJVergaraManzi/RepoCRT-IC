import React, {Component} from "react";
import axios from 'axios'
import styled from "styled-components";
import 'react-datepicker/dist/react-datepicker.css'
import '../../../styles/forms/actividades.css';
import { Toaster,toast  } from "react-hot-toast";
import ReactS3 from 'react-s3';

const Styles = styled.div`
 background: #c93922;
 padding: 20px;

`;

const config = {
    bucketName: 'crtic-filestorage',
    //dirName: 'activities-documents',
    region: 'us-east-2',
    accessKeyId: 'AKIARNEFUJNUKGCIUAII',
    secretAccessKey: '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',
}

export default class ActivityForms extends Component{
    async componentDidMount(){
        console.log("prueba de Formulario de actividades:  ", this.props)
        /*if (this.props.match.params.id){
                console.log(this.props.match.params.id)
                const res = await axios.get("http://localhost:3000/Actividades" + this.props.match.params.id);
                console.log(res.data)
            }*/
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
        ideasfuerzacomunicaciones:'',
        objdeactiv:'',
        editing: false,
        errors:{
            ObjetivoEstr:"",
            TipoAct:"",
            objdeactiv:"",
            DescripcionAct:"",
            Lugar:"",
            ProcCompr:"",
            Fecha: ""
        }
        //MaterialApoyo:null
    }
    validateActivities = () => {
        let errors= {}
        let formIsValid = true
        //let pattern = \b([0-9]|[1-9][0-9]|100)\b
        if(!this.state.ObjetivoEstr ){
            this.state.errors.ObjetivoEstr = "Ingrese el objetivo estretegico"
            formIsValid = false
          }
      
          if(!this.state.TipoAct ){
            this.state.errors.TipoAct = "Ingrese el tipo de actividad"
            formIsValid = false
          }

          if(!this.state.objdeactiv){
            this.state.errors.objdeactiv = "20 caracteres como minimo para el objetivo de la actividad"
            formIsValid = false
          }

          if(!this.state.DescripcionAct || this.state.DescripcionAct.length <20){
            this.state.errors.DescripcionAct = "20 caracteres como minimo para la descripción"
            formIsValid = false
          }

          if(!this.state.ProcCompr || (this.state.ProcCompr <0 && this.state.ProcCompr >100)){
            this.state.errors.ProcCompr = "Ingrese el porcentaje y asegurese de que este entre los limites entre 0% y 100%"
            formIsValid = false
          }
      
          if(!this.state.Fecha ){
            this.state.errors.Fechas = "Ingrese la fecha"
            formIsValid = false
          }
      
          if(!this.state.Lugar ){
            this.state.errors.Lugar = "Ingrese el lugar de la reunion"
            formIsValid = false
          }
          
          this.setState({
            errors: errors
          })
          if(formIsValid === false){
            toast.error(this.state.errors.ObjetivoEstr +'\n'+
              this.state.errors.TipoAct+'\n'+
              this.state.errors.objdeactiv+'\n'+
              this.state.errors.DescripcionAct+'\n'+
              this.state.errors.ProcCompr+'\n'+
              this.state.errors.Fechas+'\n'+
              this.state.errors.Lugar)
          }else{
            document.getElementById("ActivityForm").reset();
            toast.success("Reunión creada con exito")
          }
          return formIsValid
      };
      
    handleFile = (file) => {
        console.log("f", file);
        this.setState({file: file})
    }
    onSubmit= async(e) =>{
        e.preventDefault();
        /*if (!this.validateActivities()){
            return
          }*/
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
            ideasfuerzacomunicaciones:this.state.ideasfuerzacomunicaciones,
            objdeactiv :this.state.objdeactiv
        };
        console.log("las actividades: ",this.props);
        axios.post('http://localhost:4000/actividades', NewActivity/*,{
            headers: {'content-type': 'multipart/form-data'}
        }*/)
        .then(response =>{
            console.log(response.data)
            this.setState({
            responsableactividad:'',
            objetivoestr:'',
            descripcionact:'',
            publicoobj:'',
            contraparteact:'',
            mecanismoconv:'',
            lugar:'',
            costototal:'',
            aportesolic:'',
            indicadoresmed:'',
            proccompr:'',
            tipoverific:'',
            fecha:'',
            tipoact:'',
            MaterialApoyo:'',
            ideasfuerzacomunicaciones:'',
            objdeactiv: ''
            })
            e.target.reset()
            toast.success('Actividad creada con exito con exito')
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
                <form id="ActivityForm" onSubmit={this.onSubmit}>
                    <div>
                        <h2>Reporte de Actividades CRTIC</h2>
                        <p>Favor reportar todas las actividades correspondientes al centro. Ya sean estas actividades individuales, reuniones, eventos, etc.
                        Dependiendo de la actividad hay campos opcionales que no son necesarios. Favor completar todos los que apliquen para el tipo de actividad.
                        Gracias por ayudar a que el CRT+IC salga adelante.</p>
                    </div>
                    <h5>Responsable de Actividad</h5>
                    <input 
                    onChange={this.onInputChange}
                    name="ResponsableActividad"  
                    value={this.state.ResponsableActividad}
                    type="text"/>
                    
                    <div className="card">
                        <h1>Objetivos Específicos Lineamientos CRT+IC</h1>
                        <p><b>Vigilar: </b></p>
                        <p>Tendencias, oportunidades y brechas tecnológicas para la innovación creativa
                         Dependiendo de la actividad hay campos opcionales que no son necesarios. Favor completar todos los que apliquen para el tipo de actividad.</p>
                        <p><b>Valorar y valorizar: </b></p>
                        <p>El desarrollo de proyectos creativos de base técnologica para su inserción en el mercado</p>
                        <p><b>Articular: </b></p>
                        <p>A todos los actores del ecosistema de emprendimiento e innovación para generar instancia de
                          desarrollo y vinculación de las industrias creativas en otros sectores.</p>
                        <p><b>Formar capital humano avanzado:</b></p>
                        <p>Para el fortalecimiento de proyectos de base tecnológica de las industrias creativas.</p>
                        <p><b>Pomover y difundir: </b></p>
                        <p>Los avances, reflexiones y resultados del centro para generar insumos que aporten de manera
                         Contundente a las políticas públicas, la investigación académica y el desarrollo del sector privado.</p>
                    </div>
                   <h5> Tipo de actividad</h5>
                    <select
                    className="form-select form-select-lg mb-3" 
                    name="tipoact"
                    selected={this.state.tipoact} 
                    onChange={this.onInputChange}>
                        <option value="">Seleccione su tipo de actividad</option>            
                        <option value="Taller">Taller</option>
                        <option value="Desarrollo / Planificación / Avance propio">Desarrollo / Planificación / Avance propio</option>
                        <option value="Festival">Festival</option>
                        <option value="Concierto">Concierto</option>
                        <option value="Seminario">Seminario</option>
                        <option value="Laboratorio">Laboratorio</option>
                        <option value="Entrenamiento">Entrenamiento</option>
                        <option value="Otro">Otro</option>
                    </select>
                    <h5> Objetivo estratégico</h5>
                    <select
                    className="form-select form-select-lg mb-3" 
                    name="ObjetivoEstr"
                    selected={this.state.ObjetivoEstr} 
                    onChange={this.onInputChange}>
                        <option value="">Seleccione su objetivo estratégico</option>            
                        <option value="Vigilar">Vigilar</option>
                        <option value="Articular">Articular</option>
                        <option value="Valorizar">Valorizar</option>
                        <option value="Formar">Formar</option>
                        <option value="Promover">Promover</option>
                        <option value="Difundir">Difundir</option>
                        <option value="Otro">Otro</option>
                    </select>
                    <h5>Objetivo de la actividad</h5>
                    <input 
                    onChange={this.onInputChange}
                    name="objdeactiv" 
                    value={this.state.objdeactiv} 
                    type="text"/>
                    <div class="col-md-12">
                        <h5>Descripción de la actividad / acción</h5>
                        <textarea name="DescripcionAct"
                            cols="40"
                            rows="5"
                            class="form-control mt-2"
                            aria-invalid="false"
                            value={this.state.DescripcionAct} 
                            onChange={this.onInputChange}
                            placeholder="Inserte la descripción de la actividad">
                        </textarea>
                    </div>
                    <h5>Publico Objetivo</h5>
                    <input 
                    onChange={this.onInputChange}
                    name="PublicoObj" 
                    value={this.state.PublicoObj} 
                    type="text"/>
                    <h5>Contraparte actividad</h5>
                    <input 
                    onChange={this.onInputChange}
                    name="ContraparteAct" 
                    value={this.state.ContraparteAct} 
                    type="text"/>
                    <h5>
                    Mecanismo de convocatoria / selección
                    <select
                    className="form-select form-select-lg mb-3" 
                    name="MecanismoConv"
                    selected={this.state.MecanismoConv} 
                    onChange={this.onInputChange}>
                        <option value="">Seleccione el Mecanismo de convocatoria / selección</option>             
                        <option value="Convocatoria pública abierta">Convocatoria pública abierta</option>
                        <option value="Postulación y selección por comité experto">Postulación y selección por comité experto</option>
                        <option value="Otro">Otro</option>
                    </select>
                    </h5>
                    <h5>Lugar de realización</h5>
                    <input 
                    onChange={this.onInputChange}
                    name="Lugar" 
                    value={this.state.Lugar}
                    type="text"/>
                    <h5>Costo Total</h5>
                    <input 
                    onChange={this.onInputChange}
                    name="CostoTotal" 
                    value={this.state.CostoTotal}  
                    type="text" 
                    pattern="[0-9]*"/>
                    <h5>Aporte Solicitado a 3ros</h5>
                    <input 
                    onChange={this.onInputChange}
                    name="AporteSolic" 
                    value={this.state.AporteSolic} 
                    type="text" 
                    pattern="[0-9]*"/>
                    <h5>
                    Indicadores de medición
                    <select
                    className="form-select form-select-lg mb-3" 
                    name="IndicadoresMed"
                    selected={this.state.IndicadoresMed} 
                    onChange={this.onInputChange}>       
                        <option value="">Seleccione el indicadores de medición</option>     
                        <option value="Ejecución presupuestaria">Ejecución presupuestaria</option>
                        <option value="Cumplimiento Actividades comprometidas">Cumplimiento Actividades comprometidas</option>
                        <option value="Cobertura territorial">Cobertura territorial</option>
                        <option value="Incremento usuarios">Incremento usuarios</option>
                        <option value="Satisfacción de usuarios">Satisfacción de usuarios</option>
                        <option value="Otro">Otro</option>
                    </select>
                    </h5>
                    <div>
                        <h1 >Porcentaje comprometido de Cumplimiento</h1>
                        <p>Referente a los Indicadores de medición seleccionados anteriormente, indicar un porcentaje de 
                        ejecución a comprometer, este debe ser medible.
                        Por ejemplo:  cumplimiento;  4 talleres, comprometer 100% es realizar 4/4; 
                        </p>
                        </div>
                    <h5>Porcentaje comprometido.
                    <input 
                    onChange={this.onInputChange}
                    name="ProcCompr" 
                    value={this.state.ProcCompr} 
                    type="text" 
                    pattern="[0-9]*"
                    placeholder="%"/>
                    </h5>
                    
                    <h5>
                    Tipo de verificador
                    <select
                    className="form-select form-select-lg mb-3" 
                    name="TipoVerific"
                    selected={this.state.TipoVerific} 
                    onChange={this.onInputChange}>
                        <option value="">Seleccione el tipo de verificador</option>               
                        <option value="Fotografías">Fotografías</option>
                        <option value="Lista de asistencia">Lista de asistencia</option>
                        <option value="Registro de actividad">Registro de actividad</option>
                        <option value="Enlaces">Enlaces</option>
                        <option value="Informe de prensa">Informe de prensa</option>
                        <option value="Informe de programa">Informe de programa</option>
                        <option value="Otro">Otro</option>
                    </select>
                    </h5>
                    <h5>Fecha de actividad
                    <input
                    name="Fecha"
                    type="date"  
                    onChange={this.onInputChange}
                    selected={this.state.Fecha} />
                    </h5>
                    
                    <h5>
                    Ideas Fuerza Comunicaciones
                    </h5>
                    <input 
                    onChange={this.onInputChange}
                    name="ideasfuerzacomunicaciones" 
                    value={this.state.ideasfuerzacomunicaciones} 
                    type="text"/>
                    <h5>Material de Apoyo
                    <input 
                    onChange={this.onFileChange}
                    name="MaterialApoyo" 
                    type="file" />
                    </h5>
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