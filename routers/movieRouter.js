// importo express
const express = require('express');

// importo router 
const router = express.Router();

// importo middleware multer
const upload = require('../middlewares/multer');

// importo il controller 
const movieController = require('../controllers/movieController');

//definizione delle rotte
//index
router.get('/', movieController.index);

//show
router.get('/:id', movieController.show);

//store 
router.post('/', upload.single('image'), movieController.store);

module.exports = router;