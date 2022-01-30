const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true},
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    meals: [{ type: Schema.Types.ObjectId, ref:"Meal" }],
    evaluations: [{ type: Schema.Types.ObjectId, ref:"RestaurantEvaluation" }]
})

module.exports = mongoose.model('Restaurant', restaurantSchema);
