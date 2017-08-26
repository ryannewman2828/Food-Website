var express = require('express');
var router = express.Router();

var ctrlAuth = require('../controllers/authentication');

/* GET home page. */
router.get('/hello', ctrlAuth.hello);

module.exports = router;
