const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", function(req, res, next) {

    res.send("Express está funcionando");
});

module.exports = router;