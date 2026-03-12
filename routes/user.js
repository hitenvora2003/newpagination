var express = require('express');
var router = express.Router();

const uc = require('../controller/user')

/* GET users listing. */
// router.get('/', uc.pageview);
router.post('/createdata',uc.createdata );
router.post('/login',uc.login);

module.exports = router;
