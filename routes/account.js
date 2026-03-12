var express = require('express');
var router = express.Router();

const mw = require('../middleware/auth')
const ac = require('../controller/account')

/* GET users listing. */
// router.get('/', mw.authcheck,ac.pageview);
router.post('/createdata',mw.authcheck,ac.createdata );


module.exports = router;
