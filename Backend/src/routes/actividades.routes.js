const express = require('express');
const router = express.Router();
import * as actividades from  '../controllers/actividades.controller';

// actividades

router.get('/', actividades.getAllActividades);
router.post('/', actividades.createActividades);

// actividades/:id

router.get('/:id', actividades.getActividadId);
router.delete('/:id', actividades.deleteActividades);
router.put('/:id', actividades.updateActividades);

module.exports = router;