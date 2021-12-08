import React from 'react';
import {Formik, Form, Field} from 'formik';
import { TextField} from './TextField';

 function FormularioReuniones (){
    return(
        <Formik
            initialValues={{
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
            }}
        >
        {formik => (
            <div>
            <h1 className="my-4 font-weight-bold .display-4">Registro de Reuniones</h1>
                <Form>
                    <TextField 
                    label="Responsable de la reunion" 
                    name="ResponsableReunion" 
                    type="text" />
                    <TextField 
                    label="Modalidad" 
                    name="Modalidad" 
                    type="text" />
                    <TextField 
                    label="Fecha" 
                    name="Fecha" 
                    type="date" />
                    <TextField 
                    label="Hora" 
                    name="Hora" 
                    type="time" 
                    min="00:00" 
                    max="23:59" />
                    <TextField 
                    label="Contraparte Actividad" 
                    name="Contraparte" 
                    type="text" />
                    <TextField 
                    label="Minuta de la Reunion" 
                    name="Minuta" 
                    type="text" />
                    <TextField 
                    label="Lugar de la realización o formato" 
                    name="LugarOFormato" 
                    type="text" />
                    <TextField 
                    label="Asistentes Invitados" 
                    name="AsistentesInvitados" 
                    type="text" />
                    <TextField 
                    label="Asistentes Presentes" 
                    name="AsistentesPresentes" 
                    type="text" />
                    <div id="my-radio-group">Modalidad</div>
                    <div role="group" aria-labelledby="my-radio-group">
                    <label>
                            <Field type="radio" name="Modalidad" value="Reunión presencial" />
                            Reunión presencial
                        </label>
                        <label>
                            <Field type="radio" name="Modalidad" value="Reunión Virtual (Video conferencia)" />
                            Reunión Virtual (Video conferencia)
                        </label>
                        <label>
                            <Field type="radio" name="Modalidad" value="Reunión Virtual (Llamada)" />
                            Reunión Virtual (Llamada)
                        </label>
                        <label>
                            <Field type="radio" name="Modalidad" value="Coordinación vía texto (Mensajería instantánea o cadena de correos)" />
                            Coordinación vía texto (Mensajería instantánea o cadena de correos)
                        </label>
                        <label>
                            <Field type="radio" name="Modalidad" value="Otro" />
                            Otro
                        </label>
                    </div>
                    <TextField 
                    label="Lugar o formato" 
                    name="LugarOFormato" 
                    type="text" />
                    <TextField 
                    label="Asistentes Invitados" 
                    name="AsistentesInvitados" 
                    type="text" />
                    <TextField 
                    label="Asistentes Presentes" 
                    name="AsistentesPresentes" 
                    type="text" />
                    <TextField 
                    label="Compromisos CRT+IC" 
                    name="CompromisosCRTIC" 
                    type="text" />
                    <TextField 
                    label="Lugar o formatp" 
                    name="CompromisosContraparte" 
                    type="text" />
                    <TextField 
                    label="Tipo de verificador" 
                    name="VerificadorTipo" 
                    type="text" />
                    <div id="my-radio-group">Tipo de verificador</div>
                    <div role="group" aria-labelledby="my-radio-group">
                    <label>
                            <Field type="radio" name="VerificadorTipo" value="Fotografías" />
                            Fotografías
                        </label>
                        <label>
                            <Field type="radio" name="VerificadorTipo" value="Lista de asistencia" />
                            Lista de asistencia
                        </label>
                        <label>
                            <Field type="radio" name="VerificadorTipo" value="Registro de actividad" />
                            Registro de actividad
                        </label>
                        <label>
                            <Field type="radio" name="VerificadorTipo" value="Enlaces" />
                            Enlaces
                        </label>
                        <label>
                            <Field type="radio" name="VerificadorTipo" value="Informe de medios" />
                            Informe de medios
                        </label>
                        <label>
                            <Field type="radio" name="VerificadorTipo" value="Informe de programa" />
                            Informe de programa
                        </label>
                        <label>
                            <Field type="radio" name="VerificadorTipo" value="Otro" />
                            Otro
                        </label>
                    </div>
                    <TextField 
                    label="Archivo verificador" 
                    name="VerificadorArchivo" 
                    type="file" />
                    <TextField 
                    label="Ideas para" 
                    name="IdeasParacomunicaciones" 
                    type="text" />
                    <TextField 
                    label="3 Ideas fuerza para comunicaciones" 
                    name="TresIdeas" 
                    type="text" />
                    <button className="btn btn-dark mt-3" type="submit">Register</button>
                    <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                </Form>
            </div>
        )}
        </Formik>
    );
    
}
export default FormularioReuniones