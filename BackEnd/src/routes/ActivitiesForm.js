const {Router} = require('express');
const router = Router();

const {createActivitiesForm, getActivitiesForms, getActivitiesForm, deleteActivitiesForm, updateActivitiesForm} = require('../controllers/ActivitiesForm.controller');

router(route('/'))
    .get(getActivitiesForms);
 
router.route('/ActivitiesForm')
    .post(createActivitiesForm);
router.route('/EditActivities')
    .post()
module.exports = router;
