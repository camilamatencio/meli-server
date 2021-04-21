const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get(`/items`, function(req, res, next) {
const query = req.query.q;

async function getSearchResults() {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`);
    const eachResult = response.data.results;
    const mapping = {
      author: {
        name: "Camila",
        lastName: "Atencio"
      },
    }
    mapping.categories = response.data.filters[0].values[0].path_from_root,
    mapping.items = [
      {
      id: eachResult[0].id,
      title: eachResult[0].title,
        price: {
          currency: eachResult[0].currency_id,
          amount: eachResult[0].price,
          decimals: eachResult[0].price.toFixed(2)
        },
        picture: eachResult[0].thumbnail,
        condition: eachResult[0].condition,
        free_shipping: eachResult[0].shipping.free_shipping,
        city: eachResult[0].address.city_name
      },
      {
        id: eachResult[1].id,
        title: eachResult[1].title,
        price: {
          currency: eachResult[1].currency_id,
          amount: eachResult[1].price,
          decimals: eachResult[1].price.toFixed(2)
        },
        picture: eachResult[1].thumbnail,
        condition: eachResult[1].condition,
        free_shipping: eachResult[1].shipping.free_shipping,
        city: eachResult[1].address.city_name
      },
      {
        id: eachResult[2].id,
        title: eachResult[2].title,
        price: {
          currency: eachResult[2].currency_id,
          amount: eachResult[2].price,
          decimals: eachResult[2].price.toFixed(2)
        },
        picture: eachResult[2].thumbnail,
        condition: eachResult[2].condition,
        free_shipping: eachResult[2].shipping.free_shipping,
        city: eachResult[2].address.city_name
      },
      {
        id: eachResult[3].id,
        title: eachResult[3].title,
        price: {
          currency: eachResult[3].currency_id,
          amount: eachResult[3].price,
          decimals: eachResult[3].price.toFixed(2)
        },
        picture: eachResult[3].thumbnail,
        condition: eachResult[3].condition,
        free_shipping: eachResult[3].shipping.free_shipping,
        city: eachResult[3].address.city_name
      }
    ]
    res.send(mapping);
  } catch (error) {
    console.error(error);
  }
}
  getSearchResults();
});

router.get(`/items/:id`, function(req, res, next) {
  const id = req.params.id;

  async function getIdResult() {
    try {
      const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
      const description = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
      const mapping = {
        author: {
          name: "Camila",
          lastName: "Atencio"
        },
      }
      mapping.item = {
        id: response.data.id,
        title: response.data.title,
        price: {
          currency: response.data.currency_id,
          amount: response.data.price,
          decimals: response.data.price.toFixed(2)
        },
        picture: response.data.pictures[0].url,
        condition: response.data.condition,
        free_shipping: response.data.shipping.free_shipping,
        sold_quantity: response.data.sold_quantity,
        category: response.data.category_id,
        description: description.data.plain_text
      }
      res.send(mapping)
    } catch (error) {
      console.error(error);
    }
  }
  getIdResult();
});

module.exports = router;