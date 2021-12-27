const express = require('express');
const router = express.Router();
import * as reuniones from  '../controllers/reuniones.controller';

// reuniones

router.get('/', reuniones.getAllReuniones);
router.post('/', reuniones.createReuniones);

// reuniones/:id

router.get('/:id', reuniones.getReunionId);
router.delete('/:id', reuniones.deleteReuniones);
router.put('/:id',reuniones.updateReuniones);

module.exports = router;