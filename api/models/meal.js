const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    name: { type: String, required: true },
    cost: { type: Number, min:0, required: [true, 'Informe o valor do prato'] },
    ingredients: { type: String },
    evaluations: [{ type: Schema.Types.ObjectId, ref: "MealEvaluation" }]
})

module.exports = mongoose.model('Meal', mealSchema)