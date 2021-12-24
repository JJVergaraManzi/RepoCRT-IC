const { Schema, model } = require('mongoose');

const ActivitiesForm = new Schema(
    {
        ResponsableActividad: String,
        ObjetivoEstr: String,
        TipoAct: String,
        DescripcionAct: String,
        PublicoObj: String,
        ContraparteAct: String,
        MecanismoConv: String,
        Lugar: String,
        CostoTotal: Number,
        AporteSolic: Number,
        IndicadoresMed: String,
        ProcCompr: Number,
        TipoVerific: String,
        Fecha:Date,
        MaterialApoyo:Buffer
    }, {
        timestamps: true
    });

module.exports = model('FormularioActividades', ActivitiesForm);