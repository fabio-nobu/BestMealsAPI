const express = require('express');

module.exports = function(server) {

    //API Main Route
    const router = express.Router();
    server.use('/api', router)

    //Routes
    const restaurantServiceAPI =  require('')
    restaurantServiceAPI.register(router, '/restaurant')
}