const {Router} = require('express');
const router = Router();

const {getFormActivities, CreateFormActivities, UpdateFormActivity, getFormActivity } = require('../controllers/FormularioActividades.controller');


router.route('/')
    .get(getFormActivities)
    .post(CreateFormActivities)

router.route('/:id')
    .get(getFormActivity)
    .put(UpdateFormActivity)
    .delete()

module.exports = router;