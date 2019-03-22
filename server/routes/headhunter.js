const express = require('express');
const router = express.Router();
const headhunterCtrl = require('../controllers/headhunter')

router.route('/fetchHeadHunters')
  .get(headhunterCtrl.getHeadHunter);

router.route('/createHeadHunter')
  .post(headhunterCtrl.createHeadHunter);

  module.exports = router;