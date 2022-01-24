const express= require('express');
const router = express.Router();
import * as clases from '../controllers/clases.controller';

//clases

router.get('/', clases.getAllClases);
router.post('/',clases.createClases);

// clases/:id

router.get('/:id', clases.getClaseId);
router.delete('/:id', clases.deleteClases);
router.put('/:id', clases.updateClases);

//export
module.exports = router;