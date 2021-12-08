import {React,useState} from 'react';
import {Formik, Form, Field} from 'formik';
import { TextField} from './TextField';

export const FormularioActividades = () => {
    const [formValues, setformValues] = useState('');
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => {
        this.setState({ date });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };

    return(
        <Formik
            initialValues={{
                ResponsableActividad:'',
                ObjetivoEstrategico:'',
                TipoActivAcc:'',
                ObjectActAcc:'',
                DescrActAcc:'',
                PublObj:'',
                ContraparteAct:'',
                MecConvSel:'',
                LugarRealizacion:'',
                CostoTotal:'',
                AporteDe3eros:'',
                IndicadoresDeMedicion:'',
                PorcentajeComprometido:'',
                TipoVerificador:'',
                FechaActAcc:'',
                IdeasFuerzaComunicacion:'', 
                MaterialDeApoyo:'', 
            }}
            
        >
        {formik => (
            <div>
            <h1 className="my-4 font-weight-bold .display-4">Registro de Actividades</h1>
                <Form action="" onSubmit={handleSubmit} className="formulario">
                    <TextField 
                    label="Responsable de la Actividad" 
                    name="ResponsableActividad" 
                    type="text" />
                    <TextField 
                    label="Modalidad" 
                    name="ObjetivoEstrategico" 
                    type="text" />
                    <TextField 
                    label="Fecha" 
                    name="TipoActivAcc" 
                    type="date" />
                    <div id="my-radio-group">Tipo de convocatoria / selección</div>
                    <div role="group" aria-labelledby="my-radio-group">
                    <label>
                            <Field type="radio" name="TipoActivAcc" value="Convocatoria pública abierta" />
                            Convocatoria pública abierta
                        </label>
                        <label>
                            <Field type="radio" name="TipoActivAcc" value="Taller" />
                            Taller
                        </label>
                        <label>
                            <Field type="radio" name="TipoActivAcc" value="Desarrollo /Planificación /Avance propio" />
                            Desarrollo /Planificación /Avance propio
                        </label>
                        <label>
                            <Field type="radio" name="TipoActivAcc" value="Festival" />
                            Festival
                        </label>
                        <label>
                            <Field type="radio" name="TipoActivAcc" value="Concierto" />
                            Concierto
                        </label>
                        <label>
                            <Field type="radio" name="TipoActivAcc" value="Seminario" />
                            Seminario
                        </label>
                        <label>
                            <Field type="radio" name="TipoActivAcc" value="Laboratorio" />
                            Laboratorio
                        </label>
                        <label>
                            <Field type="radio" name="TipoActivAcc" value="Entrenamiento" />
                            Entrenamiento
                        </label>
                        <label>
                            <Field type="radio" name="TipoActivAcc" value="otro" />
                            Otro:
                            <TextField label="Hora" name="TipoActivAcc" type="time" />
                        </label>
                    </div>
                    <TextField 
                    label="Hora" 
                    name="ObjectActAcc" 
                    type="time" />
                    <div id="my-radio-group">Mecanismo de convocatoria / selección</div>
                    <div role="group" aria-labelledby="my-radio-group">
                    <label>
                            <Field type="radio" name="ObjectActAcc" value="Convocatoria pública abierta" />
                            Convocatoria pública abierta
                        </label>
                        <label>
                            <Field type="radio" name="ObjectActAcc" value="Vigilar" />
                            Vigilar
                        </label>
                        <label>
                            <Field type="radio" name="ObjectActAcc" value="Articular" />
                            Articular
                        </label>
                        <label>
                            <Field type="radio" name="ObjectActAcc" value="Valorizar" />
                            Valorizar
                        </label>
                        <label>
                            <Field type="radio" name="ObjectActAcc" value="Formar" />
                            Formar
                        </label>
                        <label>
                            <Field type="radio" name="ObjectActAcc" value="Difundir" />
                            Difundir
                        </label>
                        <label>
                            <Field type="radio" name="ObjectActAcc" value="otro" />
                            Otro:
                            <TextField label="Hora" name="ObjectActAcc" type="time" />
                        </label>
                    </div>
                    <TextField 
                    label="Contraparte Actividad" 
                    name="DescrActAcc" 
                    type="text" />
                    <TextField 
                    label="Minuta de la Reunion" 
                    name="PublObj" 
                    type="text" />
                    <TextField 
                    label="Lugar de la realización o formato" 
                    name="ContraparteAct" 
                    type="text" />
                    <TextField 
                    label="Asistentes Invitados" 
                    name="MecConvSel" 
                    type="text" />
                    <div id="my-radio-group">Mecanismo de convocatoria / selección</div>
                    <div role="group" aria-labelledby="my-radio-group">
                    <label>
                            <Field type="radio" name="MecConvSel" value="Convocatoria pública abierta" />
                            Convocatoria pública abierta
                        </label>
                        <label>
                            <Field type="radio" name="MecConvSel" value="Postulación y selección por comité experto" />
                            Postulación y selección por comité experto
                        </label>
                        <label>
                            <Field type="radio" name="MecConvSel" value="otro" />
                            Otro
                        </label>
                    </div>
                    <TextField 
                    label="Asistentes Presentes" 
                    name="LugarRealizacion" 
                    type="text" />
                    <TextField 
                    label="Archivo verificador" 
                    name="VerificadorArchivo" 
                    type="file" />
                    <TextField 
                    label="Ideas para" 
                    name="IdeasParacomunicaciones" 
                    type="text" />
                    <TextField 
                    label="Aporte de terceros" 
                    name="AporteDe3eros" 
                    type="text" />
                    <TextField 
                    label="Fecha de Actividad/Acción" name="FechaActAcc" type="date" />
                    <button className="btn btn-dark mt-3" type="submit">Register</button>
                    <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                </Form>
            </div>
        )}
        </Formik>
    );
    
}
export default FormularioActividades;