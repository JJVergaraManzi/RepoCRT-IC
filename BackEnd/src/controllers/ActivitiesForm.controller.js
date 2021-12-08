const notesCtrl = {};

const ActivitiesForm = require('../models/ActivitiesForm');

ActivitiesFormsCtrl.getActivitiesForms = async (req, res) => {
    const ActivitiesForms = await ActivitiesForm.find();
    res.json(ActivitiesForms);
};

ActivitiesFormsCtrl.createActivitiesForm = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newActivitiesForm = new ActivitiesForm({
        ResponsableActividad,
        ObjetivoEstrategico,
        TipoActivAcc,
        ObjectActAcc,
        DescrActAcc,
        PublObj,
        ContraparteAct,
        MecConvSel,
        LugarRealizacion,
        CostoTotal,
        AporteDe3eros,
        IndicadoresDeMedicion,
        PorcentajeComprometido,
        TipoVerificador,
        FechaActAcc,
        IdeasFuerzaComunicacion, 
        MaterialDeApoyo,
    });
    await newActivitiesForm.save();
    res.json('New ActivitiesForm added');
};

ActivitiesFormsCtrl.getActivitiesForm = async (req, res) => {
    const ActivitiesForm = await ActivitiesForm.findById(req.params.id);
    res.json(ActivitiesForm);
}

ActivitiesFormsCtrl.deleteActivitiesForm = async (req, res) => {
    await ActivitiesForm.findByIdAndDelete(req.params.id)
    res.json('ActivitiesForm Deleted');
}

ActivitiesFormsCtrl.updateActivitiesForm = async (req, res) => {
    const { title, content, duration, date, author } = req.body;
    await ActivitiesForm.findByIdAndUpdate(req.params.id, {
        title,
        content,
        duration,
        author
    });
    res.json('ActivitiesForm Updated');
}

module.exports = ActivitiesFormCtrl;