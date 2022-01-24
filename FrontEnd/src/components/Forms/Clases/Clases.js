import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import  {TextField}  from '@material-ui/core/';
import  {Button}  from '@material-ui/core/';


export const clases = () =>{

    const validate = Yup.object({
        nombre: Yup.string()
        .min(3, "El nombre que escribió es muy corto")
        .max(15, "El nombre que escribió es muy largo")
        .required(),
        apellido: Yup.string()
        .min(3, "El nombre que escribió es muy corto")
        .max(15, "El nombre que escribió es muy largo")
        .required(),
        fecha: Yup.date()
        .required(),
        alumnosAsistentes: Yup.number()
        .required(),
        alumnosInscritos:Yup.number()
        .required()
    });

    return(
        <Formik
        initialValues ={{
            nombre:'',
            apellido:'',
            fecha:'',
            alumnosAsistentes:'',
            alumnosInscritos:''
        }}
        validationSchema={validate}
        onSubmit={e=>{
            console.log(e)
        }}
        >
            <div>
                <h3>Clases</h3>
                <div>

                </div>
            </div>
        </Formik>
    )
}

