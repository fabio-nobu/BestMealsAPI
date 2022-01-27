const mongoose = require('mongoose');

const restaurantEvaluationSchema = new mongoose.Schema({
    evaluation: { type: Number, min: 0, required: [true, 'De uma nota ao restaurante']},
    comment: { type: String }
})

const mealEvaluationSchema = new mongoose.Schema({
    evaluation: { type: Number, min:0, required: [true, 'De uma nota ao prato'] },
    comment: { type: String }
})

const mealSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cost: { type: Number, min:0, required: [true, 'Informe o valor do prato'] },
    ingredients: { type: String },
    evaluations: [mealEvaluationSchema]
})
const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true},
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    meals: [mealSchema],
    evaluations: [restaurantEvaluationSchema]
})

module.exports = restful.model('Restaurant', restaurantSchema)
