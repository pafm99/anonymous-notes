const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message');

router.get("/", messageController.get);

router.post("/", messageController.add);

module.exports = router;