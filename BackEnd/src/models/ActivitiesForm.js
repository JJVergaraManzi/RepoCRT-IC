const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
    {
        ResponsableActividad:'',
        ObjetivoEstrategico:'',
        TipoActivAcc:'',
        ObjectActAcc:'',
        DescrActAcc:'',
        PublObj:'',
        ContraparteAct:'',
        MecConvSel:'',
        LugarRealizacion:'',
        CostoTotal:'',
        AporteDe3eros:'',
        IndicadoresDeMedicion:'',
        PorcentajeComprometido:'',
        TipoVerificador:'',
        FechaActAcc:'',
        IdeasFuerzaComunicacion:'', 
        MaterialDeApoyo:'', 
    }, {
        timestamps: true
    });

module.exports = model('Note', noteSchema);