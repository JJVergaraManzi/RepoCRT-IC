const FrCtrl = {};

const ReunionsForm = require('../models/FormularioReuniones')

FrCtrl.getFormReunions = async (req, res) =>{
    const reunionsForm = await ReunionsForm.find();
    res.json(reunionsForm);
};

FrCtrl.CreateFormReunions = async (req, res) => {
    const { ResponsableReunion,
        Modalidad, Fecha, Hora, Objetivo,Minuta, Contraparte,LugarOFormato,AsistentesInvitados,
        AsistentesPresentes, CompromisosCRTIC, CompromisosContraparte, VerificadorTipo,VerificadorArchivo,TresIdeas } = req.body;
    const newReunionForm = new ReunionsForm({
        ResponsableReunion,
        Modalidad,
        Fecha,
        Hora,
        Objetivo,
        Minuta,
        Contraparte,
        LugarOFormato,
        AsistentesInvitados,
        AsistentesPresentes,
        CompromisosCRTIC,
        CompromisosContraparte,
        VerificadorTipo,
        VerificadorArchivo,
        TresIdeas,
    });
    await newReunionForm.save();
    res.json('New Note added');
};

FrCtrl.UpdateFormReunion= async (req, res) => {
    const { ResponsableActividad,
        ObjetivoEstr, TipoAct, DescripcionAct, PublicoObj, ContraparteAct, 
        MecanismoConv, Lugar, CostoTotal, AporteSolic, IndicadoresMed, 
        ProcCompr, TipoVerific, Fecha, MaterialApoyo } = req.body;
    const newActivityForm = new findByIdAndUpdate(req.params.id, {
        ResponsableActividad,
        ObjetivoEstr,
        TipoAct,
        DescripcionAct,
        PublicoObj,
        ContraparteAct,
        MecanismoConv,
        Lugar,
        CostoTotal,
        AporteSolic,
        IndicadoresMed,
        ProcCompr,
        TipoVerific,
        Fecha,
        MaterialApoyo
    });
    await newActivityForm.save();
    res.json('New Note added');
};

FrCtrl.getFormReunion = async (req, res) => {
    const reunionsForm = await ReunionsForm.findById(req.params.id);
    res.json(reunionsForm);
};

FrCtrl.DeleteFormReunion = async (req, res) => {
    await ReunionsForm.findByIdAndDelete(req.params.id)
    res.json('ReunionsForm Deleted');
}

module.exports = FrCtrl;