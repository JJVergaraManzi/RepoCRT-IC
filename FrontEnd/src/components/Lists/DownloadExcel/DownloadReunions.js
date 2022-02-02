import React, { Component } from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default class DownloadReunions extends Component{
    componentDidMount= async ()=>{
        console.log("datos para el excel de reuniones: ",this.props, this.props.excelData);
    }
    render() {
        console.log("datos para el excel de reuniones: ",this.props.excelData.modalidad, this.props.excelData);
        return (
            <ExcelFile element={<button className="btn btn-primary" >Descargar reuniones</button>}>
                <ExcelSheet data={this.props.excelData} name="Reuniones">
                    <ExcelColumn label="Responsable de la reunión" value="responsablereunion"/>
                    <ExcelColumn label="Modalidad" value="modalidad"/>
                    <ExcelColumn label="Fecha" value="fecha"/>
                    <ExcelColumn label="Hora" value="hora"/>
                    <ExcelColumn label="Objetivo de la reunión" value="objetivo"/>
                    <ExcelColumn label="Minuta de la reunión" value="minuta"/>
                    <ExcelColumn label="Contraparte actividad" value="contraparte"/>
                    <ExcelColumn label="Lugar o Formato" value="lugaroformato"/>
                    <ExcelColumn label="Asistentes presentes" value="asistentespresentes"/>
                    <ExcelColumn label="Asistentes invitados" value="asistentesinvitados"/>
                    <ExcelColumn label="Tipo de verificador" value="verificadortipo"/>
                    <ExcelColumn label="Compromisos del CRT+IC" value="compromisoscrtic"/>
                    <ExcelColumn label="Compromisos de la contraparte" value="compromisoscontraparte"/>
                    <ExcelColumn label="3 Ideas fuerza para comunicaciones" value="tresideas"/>
                </ExcelSheet>
            </ExcelFile>
        );
    }
}