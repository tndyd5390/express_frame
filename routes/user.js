var express = require("express");
var router = express.Router();
var userQuery = require("../query/user")();

router.get('/', async (req, res, next) => {
  var result = await userQuery.getUser(null);
  res.send(result);
})

module.exports = router;

