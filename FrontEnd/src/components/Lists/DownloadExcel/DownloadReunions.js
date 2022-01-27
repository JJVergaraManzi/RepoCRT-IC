import React, { Component } from "react";
import ReactExport from "react-export-excel";
import axios from "axios";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default class DownloadReunions extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/reuniones')
        this.setState({
            data : res.data.data
        });
        console.log("datos para el excel de reuniones: ",this.state.data);
    }
    render() {
        return (
            <ExcelFile element={<button className="btn btn-primary" >Descargar reuniones</button>}>
                <ExcelSheet data={this.state.data} name="Employees">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="Wallet Money" value="amount"/>
                    <ExcelColumn label="Gender" value="sex"/>
                    <ExcelColumn label="Marital Status"
                                 value={(col) => col.is_married ? "Married" : "Single"}/>
                </ExcelSheet>
            </ExcelFile>
        );
    }
}