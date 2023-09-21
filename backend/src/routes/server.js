const express = require('express');
const ServerController = require('../controller/server');

const router = express.Router();

router.post('/', ServerController.create);
router.get('/', ServerController.get);
router.post('/join', ServerController.joinServer);

module.exports = router;
