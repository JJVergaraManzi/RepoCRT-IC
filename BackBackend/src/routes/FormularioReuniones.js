const {Router} = require('express');
const router = Router();

const { getFormReunions ,CreateFormReunions, UpdateFormReunion,getFormReunion, DeleteFormReunion } = require('../controllers/FormularioReuniones.controller');


router.route('/')
    .get( getFormReunions)
    .post(CreateFormReunions)


router.route('/:id')
    .put(UpdateFormReunion)
    .delete(getFormReunion)
    .get(DeleteFormReunion)

module.exports = router;