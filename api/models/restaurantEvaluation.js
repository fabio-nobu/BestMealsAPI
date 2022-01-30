const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantEvaluationSchema = new Schema({
    restaurant: { type: Schema.Types.ObjectId, red: "Restaurant" },
    evaluation: { type: Number, min: 0, required: [true, 'De uma nota ao restaurante']},
    comment: { type: String }
})

module.exports = mongoose.model('RestaurantEvaluation', restaurantEvaluationSchema)