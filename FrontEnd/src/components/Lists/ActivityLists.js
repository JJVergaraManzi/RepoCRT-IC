
import React, { useState} from 'react';
import Activity from './links/Activity';
import DownloadActivities from './DownloadExcel/DownloadActivities';
const ActivityList = (props)=>{
    const [data, setData] =useState(props.lista);
    const [query, setQuery] =useState('')

    const handleChange = (event) => {
        setQuery(event.target.value);
        setData(props.lista.filter(elem => elem.responsableactividad.toLowerCase().startsWith(event.target.value)));
    }

        return(
            <div className="d-flex flex-row">
                <div className="row g-3 ms-auto">
                    <h5>Actividades</h5>
                    <form className="row g-3 ms-auto">
                        <div className="col-auto center">
                            <input
                            defaultValue={''}
                            value={query}
                            onChange={(e) => handleChange(e)}
                            type="text"
                            className="form-control ms-auto"
                            placeholder="Encuentre su actividad"
                            />
                            <div>
                                <DownloadActivities excelData={props.lista}>
                                </DownloadActivities>
                            </div>
                        </div>
                    </form>
                    <table className="table table-bordered border-primary table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Responsable de la actividad</th>
                                <th scope="col">Objetivo estratégico</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Lugar de la actividad </th>
                                <th scope="col">Editar Fila</th>
                                <th scope="col">Eliminar Fila</th>
                                <th scope="col">Descargar PDF</th>
                                <th scope="col">Detalles</th>
                            </tr>
                        </thead>
                        <tbody>    
                            { console.log("prueba de this.props.lista: ") || data.map(activity =>(
                                <Activity key={activity.id} activity={activity}/>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            )
}

export default ActivityList;