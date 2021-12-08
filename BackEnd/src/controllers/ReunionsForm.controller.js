const notesCtrl = {};

const ReunionsForm = require('../models/ReunionsForm');

ReunionsFormsCtrl.getReunionsForms = async (req, res) => {
    const ReunionsForms = await ReunionsForm.find();
    res.json(ReunionsForms);
};

ReunionsFormsCtrl.createReunionsForm = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newReunionsForm = new ReunionsForm({
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
        IdeasParacomunicaciones,
        TresIdeas, 
    });
    await newReunionsForm.save();
    res.json('New ReunionsForm added');
};

ReunionsFormsCtrl.getReunionsForm = async (req, res) => {
    const ReunionsForm = await ReunionsForm.findById(req.params.id);
    res.json(ReunionsForm);
}

ReunionsFormsCtrl.deleteReunionsForm = async (req, res) => {
    await ReunionsForm.findByIdAndDelete(req.params.id)
    res.json('ReunionsForm Deleted');
}

ReunionsFormsCtrl.updateReunionsForm = async (req, res) => {
    const { title, content, duration, date, author } = req.body;
    await ReunionsForm.findByIdAndUpdate(req.params.id, {
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
        IdeasParacomunicaciones,
        TresIdeas, 
    });
    res.json('ReunionsForm Updated');
}

module.exports = ReunionsFormCtrl;