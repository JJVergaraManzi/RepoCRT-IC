import React, { useState, useEffect } from "react";
import '../../../../styles/forms/reuniones.css';
import axios from 'axios'
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  MenuItem,
  InputLabel,
  Select
} from "@mui/material";

const Styles = styled.div`
 background: #5b79c9;
 padding: 20px;
 `;


const ReunionsForms = () =>{
    const [reunions, SetReunions] = useState({
        responsablereunion:"",
        modalidad:"",
        fecha:"", 
        hora:"",
        objetivo:"",
        minuta:"",
        contraparte:"",
        lugaroformato:"",
        asistentesinvitados:"",
        asistentespresentes:"",
        compromisoscrtic:"",
        compromisoscontraparte:"",
        verificadortipo:"",
        tresideas:""
    });

    
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            loadreunions(params.id);
        }
    }, [params.id]);

    const loadreunions = async (id) =>{
        const res = await axios.get('http://localhost:4000/reuniones/'+id);
        SetReunions({
            responsablereunion:res.responsablereunion ,
            modalidad:res.modalidad ,
            fecha:res.fecha ,
            hora:res.hora ,
            objetivo:res.objetivo ,
            minuta:res.minuta ,
            contraparte:res.contraparte ,
            lugaroformato:res.lugaroformato ,
            asistentesinvitados:res.asistentesinvitados ,
            asistentespresentes:res.asistentespresentes ,
            compromisoscrtic:res.compromisoscrtic ,
            compromisoscontraparte:res.compromisoscontraparte ,
            verificadortipo:res.verificadortipo ,
            tresideas:res.tresideas ,
            });
        setEditing(true);
    };
    
    const handleChange = (e) => SetReunions({ ...reunions, [e.target.name]: e.target.value });

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setLoading(true);
        try{
            if(editing){
                const res = await axios.put('http://localhost:4000/reuniones/'+params.id, reunions)
                .then(response=>{
                    console.log(response.data)
                })
                .catch(error =>{
                    console.warn(error.data)
                })
            }else{
                const res = await axios.post('http://localhost:4000/reuniones', reunions)
                .then(response=>{
                    console.log(response.data)
                })
                .catch(error =>{
                    console.warn(error.data)
                })
            }
            setLoading(false);
            navigate("/");
        }catch(error){
            console.error(error);
        }
    }
    console.log(reunions)
    return(
        <Styles>
            <Grid
                container
                alignItems="center"
                direction="column"
                justifyContent="center"
            >
                <Grid item xs={6}>
                <Card
                    sx={{ mt: 8}}
                    style={{
                        backgroundColor: "#1E272E",
                        padding: "1rem",
                    }}>
                        <Typography variant="h5" textAlign="center" color="white">
                            {editing ? "Actualizar Reunion": "Crear Reunion"}
                        </Typography>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    variant="filled"
                                    label="Ingrese el nombre y apellido del responsable"
                                    sx={{
                                    display: "flex",
                                    margin: ".5rem 0",
                                    }}
                                    name="responsablereunion"
                                    onChange={handleChange}
                                    value={reunions.responsablereunion}
                                    inputProps={{ style: { color: "black" } }}
                                    InputLabelProps={{ style: { color: "black" } }}
                                />
                                <InputLabel id="demo-simple-select-label">Modalidad</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={reunions.modalidad}
                                    name="modalidad"
                                    label="Modalidad de la a reunión"
                                    onChange={handleChange}>
                                        <MenuItem value={"Reunion Prescencial"}>Reunion Prescencial</MenuItem>
                                        <MenuItem value={"Reunion Virtual (Conferencia)"}>Reunion Virtual (Conferencia)</MenuItem>
                                        <MenuItem value={"Reunion Virtual (Llamada)"}>Reunion Virtual (Llamada)</MenuItem>
                                        <MenuItem value={"Coordinación vía texto (Mensajería instantánea o cadena de correos)"}>Coordinación vía texto (Mensajería instantánea o cadena de correos)</MenuItem>
                                        <MenuItem value={"Otro"}>Otro</MenuItem>
                                </Select>
                                <TextField
                                    type="date"
                                    variant="filled"
                                    sx={{
                                    display: "flex",
                                    margin: "0.5rem 0",
                                    }}
                                    name="fecha"
                                    id="fecha"
                                    defaultValue="2017-05-24"
                                    minDate="24/01/2019"
                                    onChange={handleChange}
                                    value={reunions.fecha}
                                    inputProps={{ style: { color: "black" } }}
                                    InputLabelProps={{ style: { color: "black" } }}
                                    />    
                                <TextField
                                    type="time"
                                    variant="filled"
                                    sx={{
                                    display: "flex",
                                    margin: "0.5rem 0",
                                    }}
                                    name="hora"
                                    id="hora"
                                    defaultValue="2021-05-24"
                                    minTime="00:00"
                                    maxTime="23:59"
                                    onChange={handleChange}
                                    value={reunions.hora}
                                    inputProps={{ style: { color: "black" } }}
                                    InputLabelProps={{ style: { color: "black" } }}
                                    />
                                <TextField
                                    variant="filled"
                                    label="Ingrese la modalidad"
                                    sx={{
                                    display: "flex",
                                    margin: ".5rem 0",
                                    }}
                                    name="modalidad"
                                    onChange={handleChange}
                                    value={reunions.modalidad}
                                    inputProps={{ style: { color: "black" } }}
                                    InputLabelProps={{ style: { color: "black" } }}
                                    />
                                <TextField
                                    variant="filled"
                                    label="Minuta de la reunión"
                                    sx={{
                                    display: "flex",
                                    margin: ".5rem 0",
                                    }}
                                    name="minuta"
                                    onChange={handleChange}
                                    value={reunions.minuta}
                                    inputProps={{ style: { color: "black" } }}
                                    InputLabelProps={{ style: { color: "black" } }}
                                />
                                <TextField
                                    variant="filled"
                                    label="Minuta de la reunión"
                                    sx={{
                                    display: "flex",
                                    margin: ".5rem 0",
                                    }}
                                    name="minuta"
                                    onChange={handleChange}
                                    value={reunions.minuta}
                                    inputProps={{ style: { color: "black" } }}
                                    InputLabelProps={{ style: { color: "black" } }}
                                />
                                <TextField
                                    variant="filled"
                                    label="Lugar o Formato"
                                    sx={{
                                    display: "flex",
                                    margin: ".5rem 0",
                                    }}
                                    name="lugaroformato"
                                    onChange={handleChange}
                                    value={reunions.lugaroformato}
                                    inputProps={{ style: { color: "black" } }}
                                    InputLabelProps={{ style: { color: "black" } }}
                                />
                                <TextField
                                    variant="filled"
                                    label="Nombre de la contraparte"
                                    sx={{
                                    display: "flex",
                                    margin: ".5rem 0",
                                    }}
                                    name="contraparte"
                                    onChange={handleChange}
                                    value={reunions.contraparte}
                                    inputProps={{ style: { color: "black" } }}
                                    InputLabelProps={{ style: { color: "black" } }}
                                />
                                <TextField
                                    variant="filled"
                                    label="Asistentes invitados"
                                    sx={{
                                    display: "flex",
                                    margin: ".5rem 0",
                                    }}
                                    name="asistentesinvitados"
                                    onChange={handleChange}
                                    value={reunions.asistentesinvitados}
                                    inputProps={{ style: { color: "black" } }}
                                    InputLabelProps={{ style: { color: "black" } }}
                                />
                                <TextField
                                    variant="filled"
                                    label="Asistentes presentes"
                                    sx={{
                                    display: "flex",
                                    margin: ".5rem 0",
                                    }}
                                    name="asistentespresentes"
                                    onChange={handleChange}
                                    value={reunions.asistentespresentes}
                                    inputProps={{ style: { color: "black" } }}
                                    InputLabelProps={{ style: { color: "black" } }}
                                />
                                <InputLabel id="demo-simple-select-label">Compromisos del CRT+IC</InputLabel>
                                <textarea
                                    cols="40"
                                    rows="5"
                                    class="form-control mt-2"
                                    aria-invalid="false"
                                    name="compromisoscrtic" 
                                    value={reunions.compromisoscrtic}
                                    onChange={handleChange}
                                    placeholder="Inserte la descripción del compromiso del CRT+IC">
                                </textarea>
                                <InputLabel id="demo-simple-select-label">Compromisos de la contraparte</InputLabel>
                                <textarea
                                    cols="40"
                                    rows="5"
                                    class="form-control mt-2"
                                    aria-invalid="false"
                                    name="compromisoscontraparte" 
                                    value={reunions.compromisoscontraparte}
                                    onChange={handleChange}
                                    placeholder="Inserte la descripción del compromiso de la contraparte">
                                </textarea>
                                <InputLabel id="demo-simple-select-label">Tipo de archivo verificador</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={reunions.verificadortipo}
                                    name="verificadortipo"
                                    label="Tipo de archivo verificador"
                                    onChange={handleChange}>
                                        <MenuItem value={"Fotografías"}>Fotografías</MenuItem>
                                        <MenuItem value={"Lista de asistencia"}>Lista de asistencia</MenuItem>
                                        <MenuItem value={"Registro de actividad"}>Registro de actividad</MenuItem>
                                        <MenuItem value={"Enlaces"}>Enlaces</MenuItem>
                                        <MenuItem value={"Informe de medios"}>Informe de medios</MenuItem>
                                        <MenuItem value={"Informe de programa"}>Informe de programa</MenuItem>
                                        <MenuItem value={"Otro"}>Otro</MenuItem>
                                </Select>
                                <InputLabel id="demo-simple-select-label">Tres ideas de fuerza para las comunicaciones</InputLabel>
                                <textarea
                                    cols="40"
                                    rows="5"
                                    class="form-control mt-2"
                                    aria-invalid="false"
                                    name="tresideas" 
                                    value={reunions.tresideas}
                                    onChange={handleChange}
                                    placeholder="Escriba las 3 ideas mas importantes para las comunicaciones">
                                </textarea>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    >
                                    {loading ? (
                                    <CircularProgress color="inherit" size={25} />
                                    ) : (
                                    "Ingrese la reunión"
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Styles>
    )
 };

 export default ReunionsForms;