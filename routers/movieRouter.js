// importo express
const express = require('express');

// importo router 
const router = express.Router();

// importo il controller 
const bookController = require('../controllers/movieController');

//definizione delle rotte
//index
router.get('/', bookController.index);

//show
router.get('/:id', bookController.show);