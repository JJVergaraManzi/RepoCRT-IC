const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
    {
        ResponsableReunion: String,
        Modalidad: String,
        Fecha: Date ,
        Hora:String,
        Objetivo:String,
        Minuta: String,
        Contraparte: String,
        LugarOFormato: String,
        AsistentesInvitados: String,
        AsistentesPresentes: String,
        Modalidad: String,
        CompromisosCRTIC:String,
        CompromisosContraparte:String,
        VerificadorTipo:String,
        VerificadorArchivo:{ data: Buffer, contentType: String },
        IdeasParacomunicaciones:String,
        TresIdeas:String, 
    }, {
        timestamps: true
    });

module.exports = model('Note', noteSchema);