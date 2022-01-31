/*
* @author: Fabio Nobuyoshi Moriya Yusuki
* @description: modelo da avaliação do restaurante a ser utilizado pelo mongoose
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Setando uma constante que sera usada frequentemente dentro do da criação do Schema. Economiza espaço de código de tempo

const restaurantEvaluationSchema = new Schema({
    restaurant: { type: Schema.Types.ObjectId, red: "Restaurant" },
    evaluation: { type: Number, min: 0, required: [true, 'De uma nota ao restaurante']},
    comment: { type: String }
})

module.exports = mongoose.model('RestaurantEvaluation', restaurantEvaluationSchema)