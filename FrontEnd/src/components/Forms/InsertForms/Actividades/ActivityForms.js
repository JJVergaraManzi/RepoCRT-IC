import React, { useState, useEffect } from "react";
import '../../../../styles/forms/actividades.css';
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
 background: #c93922;
 padding: 20px;
 `;

const ActivityForms = () =>{

    const [activity, SetActivity] =useState({
        responsableactividad:"",
        objetivoestr:"",
        descripcionact:"",
        publicoobj:"",
        contraparteact:"",
        mecanismoconv:"",
        lugar:"",
        costototal:"",
        aportesolic:"",
        indicadoresmed:"",
        proccompr:"",
        tipoverific:"",
        fecha:"",
        tipoact:"",
        MaterialApoyo:"",
        ideasfuerzacomunicaciones:"",
        objdeactiv:""
    });
    
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            loadActivity(params.id);
        }
    }, [params.id]);

    const loadActivity = async (id) =>{
        const res = await axios.get('http://localhost:4000/actividades/'+id);
        SetActivity({
            responsableactividad: res.responsableactividad,
            objetivoestr: res.objetivoestr,
            descripcionact: res.descripcionact,
            publicoobj: res.publicoobj,
            contraparteact: res.contraparteact,
            mecanismoconv: res.mecanismoconv,
            lugar: res.lugar,
            costototal: res.costototal,
            aportesolic: res.aportesolic,
            indicadoresmed: res.indicadoresmed,
            proccompr: res.proccompr,
            tipoverific: res.tipoverific,
            fecha: res.fecha,
            tipoact: res.tipoact,
            ideasfuerzacomunicaciones: res.ideasfuerzacomunicaciones,
            objdeactiv: res.objdeactiv
            });
        setEditing(true);
    };

    const handleChange = (e) => SetActivity({ ...activity, [e.target.name]: e.target.value });

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setLoading(true);
        try{
            if(editing){
                const res = await axios.put('http://localhost:4000/actividades/'+params.id, activity)
                .then(response=>{
                    console.log(response.data)
                })
                .catch(error =>{
                    console.warn(error.data)
                })
            }else{
                const res = await axios.post('http://localhost:4000/actividades', activity)
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
  console.log(activity)
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
                        {editing ? "Actualizar actividad": "Crear Actividad"}
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
                            name="responsableactividad"
                            onChange={handleChange}
                            value={activity.responsableactividad}
                            inputProps={{ style: { color: "black" } }}
                            InputLabelProps={{ style: { color: "black" } }}
                            />
                            <InputLabel id="demo-simple-select-label">Tipo de actividad</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={activity.tipoact}
                                name="tipoact"
                                label="Tipo de actividad"
                                onChange={handleChange}
                            >
                                <MenuItem value={null}>Seleccione su tipo de actividad</MenuItem>
                                <MenuItem value={"Ejecución presupuestaria"}>Ejecución presupuestaria</MenuItem>
                                <MenuItem value={"Cumplimiento Actividades comprometidas"}>Cumplimiento Actividades comprometidas</MenuItem>
                                <MenuItem value={"Cobertura territorial"}>Cobertura territorial</MenuItem>
                                <MenuItem value={"Incremento usuarios"}>Incremento usuarios</MenuItem>
                                <MenuItem value={"Satisfacción de usuarios"}>Satisfacción de usuarios</MenuItem>
                                <MenuItem value={"Otro"}>Otro</MenuItem>
                            </Select>
                            <InputLabel id="demo-simple-select-label">Objetivo estratégico</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={activity.objetivoestr}
                                name="objetivoestr"
                                label="Objetivo estratégico"
                                onChange={handleChange}
                                >
                                <MenuItem value={null}>Seleccione su tipo de actividad</MenuItem>
                                <MenuItem value={"Vigilar"}>Vigilar</MenuItem>
                                <MenuItem value={"Articular"}>Articular</MenuItem>
                                <MenuItem value={"Valorizar"}>Valorizar</MenuItem>
                                <MenuItem value={"Formar"}>Formar</MenuItem>
                                <MenuItem value={"Promover"}>Promover</MenuItem>
                                <MenuItem value={"Otro"}>Otro</MenuItem>
                            </Select>
                            <textarea
                            cols="40"
                            rows="5"
                            class="form-control mt-2"
                            aria-invalid="false"
                            name="descripcionact" 
                            value={activity.descripcionact}
                            onChange={handleChange}
                            placeholder="Describa los sucesos mas importantes de la actividad">
                            </textarea> 
                            <TextField
                                variant="filled"
                                label="Publico objetivo"
                                sx={{
                                display: "flex",
                                margin: ".5rem 0",
                                }}
                                name="publicoobj"
                                onChange={handleChange}
                                value={activity.publicoobj}
                                inputProps={{ style: { color: "black" } }}
                                InputLabelProps={{ style: { color: "black" } }}
                                />
                            <TextField
                                variant="filled"
                                label="Contraparte de la actividad"
                                sx={{
                                display: "flex",
                                margin: ".5rem 0",
                                }}
                                name="contraparteact"
                                onChange={handleChange}
                                value={activity.contraparteact}
                                inputProps={{ style: { color: "black" } }}
                                InputLabelProps={{ style: { color: "black" } }}
                                />
                            <InputLabel id="demo-simple-select-label">Mecanismo de convocatoria</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={activity.mecanismoconv}
                                name="mecanismoconv"
                                label="Mecanismo de convocatoria"
                                onChange={handleChange}
                                >
                                <MenuItem value={null}>Seleccione su mecanismo de convocatoria</MenuItem>
                                <MenuItem value={"Convocatoria pública abierta"}>Convocatoria pública abierta</MenuItem>
                                <MenuItem value={"Postulación y selección por comité experto"}>Postulación y selección por comité experto</MenuItem>
                                <MenuItem value={"Otro"}>Otro</MenuItem>
                            </Select>
                            <TextField
                            variant="filled"
                            label="Ingrese el lugar de la actividad"
                            sx={{
                            display: "flex",
                            margin: "0.5rem 0",
                            }}
                            name="lugar"
                            onChange={handleChange}
                            value={activity.lugar}
                            inputProps={{ style: { color: "black" } }}
                            InputLabelProps={{ style: { color: "black" } }}
                            />
                            <TextField
                            variant="filled"
                            label="Ingrese el costo total de la actividad"
                            sx={{
                            display: "flex",
                            margin: "0.5rem 0",
                            }}
                            name="costototal"
                            onChange={handleChange}
                            value={activity.costototal}
                            inputProps={{ style: { color: "black" } }}
                            InputLabelProps={{ style: { color: "black" } }}
                            />
                            <TextField
                            variant="filled"
                            label="Ingrese el aporte solicitado de la actividad"
                            sx={{
                            display: "flex",
                            margin: "0.5rem 0",
                            }}
                            name="aportesolic"
                            onChange={handleChange}
                            value={activity.aportesolic}
                            inputProps={{ style: { color: "black" } }}
                            InputLabelProps={{ style: { color: "black" } }}
                            />
                        <InputLabel id="demo-simple-select-label">Indicadores de medición</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={activity.indicadoresmed}
                                name="indicadoresmed"
                                label="Indicadores de medición"
                                onChange={handleChange}
                                >
                                <MenuItem value={"Ejecución presupuestaria"}>Ejecución presupuestaria</MenuItem>
                                <MenuItem value={"Cumplimiento Actividades comprometidas"}>Cumplimiento Actividades comprometidas</MenuItem>
                                <MenuItem value={"Cobertura territorial"}>Cobertura territorial</MenuItem>
                                <MenuItem value={"Incremento usuarios"}>Incremento usuarios</MenuItem>
                                <MenuItem value={"Satisfacción de usuarios"}>Satisfacción de usuarios</MenuItem>
                                <MenuItem value={"Otro"}>Otro</MenuItem>
                            </Select>
                        <TextField
                            variant="filled"
                            label="Porcentaje comprometido."
                            sx={{
                            display: "flex",
                            margin: "0.5rem 0",
                            }}
                            name="proccompr"
                            onChange={handleChange}
                            value={activity.proccompr}
                            inputProps={{ style: { color: "black" } }}
                            InputLabelProps={{ style: { color: "black" } }}
                            />
                        <InputLabel id="demo-simple-select-label">Indicadores de medición</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={activity.tipoverific}
                                name="tipoverific"
                                label="Tipo de archivo verificador"
                                onChange={handleChange}
                                >
                                <MenuItem value={"Fotografías"}>Fotografías</MenuItem>
                                <MenuItem value={"Lista de asistencia"}>Lista de asistencia</MenuItem>
                                <MenuItem value={"Registro de actividad"}>Registro de actividad</MenuItem>
                                <MenuItem value={"Enlaces"}>Enlaces</MenuItem>
                                <MenuItem value={"Informe de prensa"}>Informe de prensa</MenuItem>
                                <MenuItem value={"Informe de programa"}>Informe de programa</MenuItem>
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
                            id="date"
                            defaultValue="2017-05-24"
                            minDate="24/01/2019"
                            onChange={handleChange}
                            value={activity.fecha}
                            inputProps={{ style: { color: "black" } }}
                            InputLabelProps={{ style: { color: "black" } }}
                            />
                        <TextField
                            variant="filled"
                            label="Porcentaje comprometido."
                            sx={{
                            display: "flex",
                            margin: "0.5rem 0",
                            }}
                            name="proccompr"
                            onChange={handleChange}
                            value={activity.proccompr}
                            inputProps={{ style: { color: "black" } }}
                            InputLabelProps={{ style: { color: "black" } }}
                            />
                        <TextField
                            variant="filled"
                            label="Ideas Fuerza Comunicaciones"
                            sx={{
                            display: "flex",
                            margin: "0.5rem 0",
                            }}
                            name="ideasfuerzacomunicaciones"
                            onChange={handleChange}
                            value={activity.ideasfuerzacomunicaciones}
                            inputProps={{ style: { color: "black" } }}
                            InputLabelProps={{ style: { color: "black" } }}
                            />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            >
                            {loading ? (
                            <CircularProgress color="inherit" size={25} />
                            ) : (
                            "Ingrese la actividad"
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

export default ActivityForms;