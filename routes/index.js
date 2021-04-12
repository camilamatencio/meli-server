const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", function(req, res, next) {

    axios.get("https://api.mercadolibre.com/sites/MLA/search?q=celular&&limit=4")
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        console.log(err)
    })

    res.send("Express está funcionando");
});

module.exports = router;