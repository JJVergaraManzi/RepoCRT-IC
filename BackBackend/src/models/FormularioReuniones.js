const { Schema, model } = require('mongoose');

const ReunionsForm = new Schema(
    {
        ResponsableReunion:String,
        Modalidad:String,
        Fecha: Date,
        Hora:   String,
        Objetivo:   String,
        Minuta: String,
        Contraparte:    String,
        LugarOFormato:  String,
        AsistentesInvitados:    String,
        AsistentesPresentes:    String,
        CompromisosCRTIC:   String,
        CompromisosContraparte: String,
        VerificadorTipo:    String,
        VerificadorArchivo:Buffer,
        TresIdeas:String, 
    }, {
        timestamps: true
    });

module.exports = model('FormularioReuniones', ReunionsForm);