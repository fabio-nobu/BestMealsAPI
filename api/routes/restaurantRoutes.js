const express = require('express');

const RestaurantController = require('../controllers/restaurant');

const router = express.Router();

router.post('', RestaurantController.addRestaurant);
router.put ('/:id', RestaurantController.updateRestaurant);
router.get('', RestaurantController.getRestaurants);
router.get('/:id', RestaurantController.getRestaurant);
router.delete('/:id', RestaurantController.deleteRestaurant);

module.exports = router;