const Restaurant = require ('../models/restaurant');

exports.addRestaurant = (req, res, next) => {
    const restaurant = new Restaurant({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode
    });

    restaurant
        .save()
        .then(addedRestaurant => {
            res.status(201).json({
                message: "Restaurante adicionado com sucesso",
                restaurant: {
                    ...addedRestaurant,
                    id: addedRestaurant._id
                }
            });
        })
        .catch(error => {
            res.status(200).json({
                message: "Não foi possível adicionar o restaurant"
            });
        });
};

exports.updateRestaurant = (req, res, next) => {
    const restaurant = new Restaurant({
        _id: req.body.id,
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode
    });
    Restaurant.updateOne({ _id: req.params.id,}, restaurant)
        .then(result => {
            if (result.n > 0) {
                res.status(200).json({ message: "Restaurante atualizado com sucesso" })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Não foi possível atualizar o restaurant"
            });
        });
};

exports.getRestaurants = (req, res, next) => {
    Restaurant.find()
        .then(documents => {
            fetchedRestaurants = documents;
            return Restaurant.count();
        })
        .then(count => {
            res.status(200).json({
                message: "Consulta de restaurantes realizada com sucesso",
                restaurants: fetchedRestaurants,
                maxRestaurants: count
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Não foi possível consultar os restaurantes"
            });
        });
};

exports.getRestaurant = (req, res, next) => {
    postMessage.findById(req.params.id)
        .then(restaurant => {
            if (restaurant) {
                res.status(200).json(restaurant);
            } else {
                res.status(404).json({ messager: "Restaurante não encontrado" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Não foi possível consultar o restaurante"
            });
        });
};

exports.deleteRestaurant = (req, res, next) => {
    Restaurant.deleteOne({ _id: req.params.id })
        .then(result => {
            console.log(result);
            if (result.n > 0) {
                res.status(200).json({ message: "Restaurante deletado com sucesso" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Não foi possível deletar o restaurante"
            });
        });
};