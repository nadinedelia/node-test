var express = require('express');
var router = express.Router();
const { client } = require('../dbConfig');
var user = require('../addUsers');

/* GET signup page. */
router.get('/', function (req, res, next) {
  res.render('signup', { title: 'MakersBnB' });
});

router.post('/', (req, res) => {
  user.getName(
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.username,
    req.body.password
  ); //uses addUsers.js module

  res.redirect('/spaces');
});

module.exports = router;
