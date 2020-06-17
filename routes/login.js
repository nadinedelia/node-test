var express = require('express');
var router = express.Router();
var auth  = require("../checkLogin");
/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login to MakersBnB' });
});

router.post('/', (req, res) => {

auth.checkLogin(req.body.username, req.body.password, res);
});

module.exports = router;