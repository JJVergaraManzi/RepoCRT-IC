import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

var globalRegex = /^\d{1,3}(?:\.\d{1,3}){2}-[\dkK]$/
class Clases extends React.Component {
    constructor(props){
        super(props);
        this.state={
            rut:'',
            nombre:'',
            apellido:'',
            fecha:'',
            estudiantesAsistentes:'',
            estudiantesInscritos:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);    
    }
    onChange(e) {
        console.log(e)
        this.setState({ 
            [e.target.name]: e.target.value 
        });
      }
      
      onSubmit= async (e)=> {
        e.preventDefault();
        
        const NewClass ={
            rut:this.state.rut,
            nombre:this.state.nombre,
            apellido:this.state.apellido,
            fecha:this.state.fecha,
            estudiantesinscritos:this.state.estudiantesInscrito,
            estudiantesasistentes:this.state.estudiantesAsistentes
        }
        console.log(e) // Object holds your form values

        const res = await axios.post("http://localhost:4000/clases",NewClass
        )
        .then(response =>{
            console.log("reunion creada con exito", response)
            this.props.history.push("/");        })
        .catch(error =>{
            console.log(error.data)
        })
        console.log(NewClass)
      }
    render(){
        const initialValues ={
            rut:'',
            nombre:'',
            apellido:'',
            fecha:'',
            estudiantesAsistentes:'',
            estudiantesInscritos:''
        };
        
        return(
            <div className="register-form">
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object().shape({
                        rut: Yup.string()
                        .matches(globalRegex, "No es un formato valido de rut")
                        .required(),
                        nombre: Yup.string()
                        .min(3, "El nombre que escribió es muy corto")
                        .max(15, "El nombre que escribió es muy largo")
                        .required("Debe poner el nombre del profesor"),
                        apellido: Yup.string()
                        .min(3, "El nombre que escribió es muy corto")
                        .max(15, "El nombre que escribió es muy largo")
                        .required("Debe poner el apellido del profesor"),
                        fecha: Yup.date()
                        .required("debe poner la fecha"),
                        alumnosAsistentes: Yup.number()
                        .required("debe poner el numero de alumnos que asistieron"),
                        alumnosInscritos:Yup.number()
                        .required("debe poner el numero de alumnos que se inscribieron"),
                    })}
                    >
                    <Form noValidate onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label htmlFor="rut">Rut</label>
                            <Field
                            name="rut" 
                            type="text" 
                            className="form-control"
                            value={this.state.rut}
                            onChange={this.onChange}/>
                            <ErrorMessage
                            name="rut"
                            component="div"
                            className="text-danger"/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="nombre">Nombre del profesor</label>
                            <Field
                            name="nombre" 
                            type="text" 
                            className="form-control"
                            value={this.state.nombre}
                            onChange={this.onChange}/>
                            <ErrorMessage
                            name="nombre"
                            component="div"
                            className="text-danger"/>
                        </div>

                        <div className='form-group'>
                            <label  htmlFor="apellido">Apellido del profesor</label>
                            <Field 
                            name="apellido" 
                            type="text" 
                            className="form-control"
                            value={this.state.apellido}
                            onChange={this.onChange}/>
                            <ErrorMessage
                            name="apellido"
                            component="div"
                            className="text-danger"/>
                        </div>
                        <div className='form-group'>
                            <label  htmlFor="fecha">Fecha</label>
                            <Field
                            name="fecha" 
                            type="date" 
                            className="form-control"
                            value={this.state.fecha}
                            onChange={this.onChange}/>
                            <ErrorMessage
                            name="fecha" 
                            component="div"
                            className="text-danger"/>
                        </div>
                        <div className='form-group'>
                            <label  htmlFor="estudiantesInscritos">Alumnos que asistieron</label>
                            <Field 
                            name="estudiantesInscritos" 
                            type="text" 
                            className="form-control"
                            value={this.state.estudiantesInscritos}
                            onChange={this.onChange}/>
                            <ErrorMessage
                            name="estudiantesInscritos" 
                            component="div"
                            className="text-danger"/>
                        </div>
                        <div className='form-group'>
                            <label  htmlFor="estudiantesAsistentes">Alumnos Inscritos</label>
                            <Field 
                            name="estudiantesAsistentes" 
                            type="text" 
                            className="form-control"
                            value={this.state.estudiantesAsistentes}
                            onChange={this.onChange}/>
                            <ErrorMessage
                            name="estudiantesAsistentes" 
                            component="div"
                            className="text-danger"/>
                        </div>
                        <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-lg btn-primary btn-block">
                            Registrar clase
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        )
    }
}
export default Clases;