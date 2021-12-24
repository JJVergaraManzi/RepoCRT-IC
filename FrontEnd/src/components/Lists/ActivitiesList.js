import axios from "axios";
import React from 'react'
import { setAppInfo } from "react-native/Libraries/LogBox/Data/LogBoxData";


const ActivitiesList = () =>{

    const [activities, SetActivities] = useState([])

    const ActivityData = async () =>{
        const res = await axios.get(
            'http://localhost:1337/api/activities-forms'
            );
        SetActivities(res.data.attributes)
    };
    const renderACtivitiesLists = (id, activity) =>{
        <Accordion key={id}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={team}>
            Responsable de la actividad {activities.attributes.ResponsableActividad}
            Fecha {activities.attributes.Fecha} <i>+</i>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={activities}>
            <Card.Body>
              <ul>
                <li>Objetivo estrategico: {activities.attributes.ObjetivoEstr}</li>
                <li>Tipo de Actividad: {activities.attributes.TipoAct}</li>
                <li>Objetivo Actual: {activities.attributes.ObjetivoAct}</li>
                <li>{activities.attributes.DescripcionAct}</li>
                <li>Publico Objetivo: {activities.attributes.PublicoObj}</li>
                <li>{activities.attributes.ContraparteAct}</li>
                <li>{activities.attributes.CostoTotal}</li>
                <li>{activities.attributes.IndicadoresMed}</li>
                <li>{activities.attributes.AporteSolic}</li>
                <li>Porcentaje: {activities.attributes.ProcCompr}%</li>
                <li>Tipo de verificacion: {activities.attributes.TipoVerific}</li>
                <li>Mecanismo:{activities.attributes.MecanismoConv}</li>
                <li>Lugar: {activities.attributes.lugar}</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    }
}
