import React, { Component } from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default class DownloadActivities extends Component{
    componentDidMount= async ()=>{
        console.log("datos para el excel de reuniones: ",this.props, this.props.excelData);
    }
    render() {
        console.log("datos para el excel de reuniones: ",this.props.excelData.modalidad, this.props.excelData);
        return (
            <ExcelFile element={<button className="btn btn-primary" >Descargar reuniones</button>}>
                <ExcelSheet data={this.props.excelData} name="Reuniones">
                    <ExcelColumn label="Responsable de la actividad" value="responsableactividad"/>
                    <ExcelColumn label="Objetivo estratégico" value="objetivoestr"/>
                    <ExcelColumn label="Descripción de la actividad / acción<" value="descripcionact"/>
                    <ExcelColumn label="Publico Objetivo" value="publicoobj"/>
                    <ExcelColumn label="Objetivo de la reunión" value="contraparteact"/>
                    <ExcelColumn label="Mecanismo de convocatoria / selección" value="mecanismoconv"/>
                    <ExcelColumn label="Lugar de realización" value="lugar"/>
                    <ExcelColumn label="Costo total" value="costototal"/>
                    <ExcelColumn label="Aporte solicitado" value="aportesolic"/>
                    <ExcelColumn label="Indicadores de medición" value="indicadoresmed"/>
                    <ExcelColumn label="Porcentaje comprometido" value="proccompr"/>
                    <ExcelColumn label="Tipo de verificador" value="tipoverific"/>
                    <ExcelColumn label="Fecha de actividad" value="fecha"/>
                    <ExcelColumn label="Tipo de actividad" value="tipoact"/>
                    <ExcelColumn label="Ideas Fuerza Comunicaciones" value="ideasfuerzacomunicaciones"/>
                </ExcelSheet>
            </ExcelFile>
        );
    }
}