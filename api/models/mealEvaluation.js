const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealEvaluationSchema = new Schema({
    meal: { type: Schema.Types.ObjectId, ref: "Meal" },
    evaluation: { type: Number, min:0, required: [true, 'De uma nota ao prato'] },
    comment: { type: String }
});

module.exports = mongoose.model('MealEvaluation', mealEvaluationSchema);