const express = require('express');
const MessageController = require('../controller/message');

const router = express.Router();

router.post('/', MessageController.create);
router.get('/', MessageController.get);

module.exports = router;
