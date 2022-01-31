/*
* @author: Fabio Nobuyoshi Moriya Yusuki
* @description: modelo da avaliação de refeição a ser utilizado pelo mongoose
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Setando uma constante que sera usada frequentemente dentro do da criação do Schema. Economiza espaço de código de tempo

const mealEvaluationSchema = new Schema({
    meal: { type: Schema.Types.ObjectId, ref: "Meal" },
    evaluation: { type: Number, min:0, required: [true, 'De uma nota ao prato'] },
    comment: { type: String }
});

module.exports = mongoose.model('MealEvaluation', mealEvaluationSchema);