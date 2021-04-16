const express = require("express");
const router = express.Router();
const axios = require('axios');
// este es el endpoint de testAPI
//pasar los parametros de busqueda como query, id

//recibir la data de mercado libre ( ya lo hice eso)
//tomar solo los datos que me interesan a mi
router.get("/", function(req, res, next) {

async function getSearchResults() {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=celular&&limit=4`);
    console.log("response");
    const eachResult = response.data.results;
    eachResult.forEach(function(item) {
      productInfo = {
        author: {
          name: "Camila",
          lastname: "Atencio"
        },
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
      }
      console.log(productInfo)
    });

  } catch (error) {
    console.error(error);
  }
}

  getSearchResults();
  
  res.send("TEST is working properly");
});

module.exports = router;