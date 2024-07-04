const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('signup', {
    title: 'Sign up',
  });
});

router.use('/signup', require('./signup'));

module.exports = router;