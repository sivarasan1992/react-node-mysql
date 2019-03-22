const express = require('express');
const router = express.Router();
const headHunter = require('./headhunter');

router.use('/headHunters', headHunter);

module.exports = router;