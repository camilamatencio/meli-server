const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get("/", function(req, res, next) {

async function getSearchResults() {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=celular&&limit=4`);
    const eachResult = response.data.results;
    const products = [author = {name: "Camila", lastname: "Atencio"}];
    eachResult.forEach(function(item) {
      productInfo = 
      items = [{
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
      }];
      products.push(productInfo)
    });
    res.send(products);
  } catch (error) {
    console.error(error);
  }
}
  getSearchResults();
});

module.exports = router;