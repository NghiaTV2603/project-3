const express = require('express');
const ChannelController = require('../controller/channel');

const router = express.Router();

router.post('/', ChannelController.create);
router.get('/', ChannelController.get);

module.exports = router;
