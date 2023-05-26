const express = require('express');

const router = express.Router();

router.route('/test')
  .get(require('../controllers/sampleController/get'));

module.exports = router;
