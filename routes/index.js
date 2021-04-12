const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", function(req, res, next) {

    axios.get("https://api.mercadolibre.com/sites/MLA/search?q=celular&&limit=4")
    .then((response) => {
      const searchResults = response.data.results;
      console.log("searchResults");
    })

    axios.get("https://api.mercadolibre.com/items/MLA885091466")
    .then((response) => {
      const idResults = response.data;
      console.log("idResults");
    })

    axios.get("https://api.mercadolibre.com/items/MLA885091466/description")
    .then((response) => {
      const idDescription = response.data;
      console.log("idDescription");
    })

    .catch((err) => {
        console.log(err)
    })

    res.send("Express está funcionando");
});

module.exports = router;