import React, {Component} from "react";

export default class ActivityForms extends Component{
    constructor(props){
        super(props);
        const {id, ResponsableReunion,Modalidad,
        Fecha, Hora, Objetivo, Minuta, Contraparte,
        LugarOFormato, AsistentesInvitados,AsistentesPresentes,
        CompromisosCRTIC, CompromisosContraparte,VerificadorTipo,
        VerificadorArchivo, TresIdeas,} = props.location.state.contact;
        this.state={
            ResponsableReunion:'',
            Modalidad:'',
            Fecha: '',
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
            VerificadorArchivo:null,
            TresIdeas:'',
        };
    }
    
    update = (e) =>{
        e.preventDefault();
    }
}
