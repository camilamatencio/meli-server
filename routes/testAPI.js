const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get("/", function(req, res, next) {

async function getSearchResults() {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=celular&&limit=4`);
    const eachResult = response.data.results;
    const mapping = {
      author: {
        name: "Camila",
        lastName: "Atencio"
      }
    }
    mapping.categories = [
      "categoria 1", "categoria 2", "categoria 3"
    ]
    mapping.items = [
      {
      id: eachResult[0].id,
      title: eachResult[0].title,
        price: {
          currency: eachResult[0].currency_id,
          amount: eachResult[0].price
        },
        picture: eachResult[0].thumbnail,
        condition: eachResult[0].condition,
        free_shipping: eachResult[0].shipping.free_shipping
      },
      {
        id: eachResult[1].id,
        title: eachResult[1].title,
        price: {
          currency: eachResult[1].currency_id,
          amount: eachResult[1].price
        },
        picture: eachResult[1].thumbnail,
        condition: eachResult[1].condition,
        free_shipping: eachResult[1].shipping.free_shipping
      },
      {
        id: eachResult[2].id,
        title: eachResult[2].title,
        price: {
          currency: eachResult[2].currency_id,
          amount: eachResult[2].price
        },
        picture: eachResult[2].thumbnail,
        condition: eachResult[2].condition,
        free_shipping: eachResult[2].shipping.free_shipping
      },
      {
        id: eachResult[3].id,
        title: eachResult[3].title,
        price: {
          currency: eachResult[3].currency_id,
          amount: eachResult[3].price
        },
        picture: eachResult[3].thumbnail,
        condition: eachResult[3].condition,
        free_shipping: eachResult[3].shipping.free_shipping
      }
    ]
    console.log(mapping)
    res.send(mapping);
  } catch (error) {
    console.error(error);
  }
}
  getSearchResults();
});

module.exports = router;