const FaCtrl = {};

const ActivitiesForm = require('../models/FormularioActividades')

FaCtrl.getFormActivities = async (req, res) =>{
    const activitiesform = await ActivitiesForm.find();
    res.json(activitiesform);
};

FaCtrl.CreateFormActivities = async (req, res) => {
    const { ResponsableActividad,
        ObjetivoEstr, TipoAct, DescripcionAct, PublicoObj, ContraparteAct, 
        MecanismoConv, Lugar, CostoTotal, AporteSolic, IndicadoresMed, 
        ProcCompr, TipoVerific, Fecha, MaterialApoyo } = req.body;
    const newActivityForm = new ActivitiesForm({
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

FaCtrl.UpdateFormActivity= async (req, res) => {
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

FaCtrl.getFormActivity = async (req, res) => {
    const activitiesForm = await ActivitiesForm.findById(req.params.id);
    res.json(activitiesForm);
};

FaCtrl.DeleteFormActivity = async (req, res) => {
    await ActivitiesForm.findByIdAndDelete(req.params.id)
    res.json('ActivitiesForm Deleted');
}

module.exports = FaCtrl;