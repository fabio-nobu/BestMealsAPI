/*
* @author: Fabio Nobuyoshi Moriya Yusuki
* @description: modelo da refeição a ser utilizado pelo mongoose
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Setando uma constante que sera usada frequentemente dentro do da criação do Schema. Economiza espaço de código de tempo

const mealSchema = new Schema({
    name: { type: String, required: true },
    cost: { type: Number, min:0, required: [true, 'Informe o valor do prato'] },
    ingredients: { type: String },
    evaluations: [{ type: Schema.Types.ObjectId, ref: "MealEvaluation" }]
})

module.exports = mongoose.model('Meal', mealSchema)