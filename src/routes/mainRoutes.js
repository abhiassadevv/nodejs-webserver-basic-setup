const express = require('express');

const router = express.Router();

const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.getData);

router.post('/', mainControllers.sendData);

module.exports = router;