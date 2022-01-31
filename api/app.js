/*
* @author: Fabio Nobuyoshi Moriya Yusuki
* @module description: responsável pela conexão ao banco de dados, setar os headers para liberar o acesso CORS e setar as rotas a serem utilizadas pelo serviço
*/

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express();

/* 
* @description: conectando ao banco de dados db_bestmeals no localhost
* @version: mongodb 5.0.5 x64
*/
mongoose
  .connect('mongodb://localhost/db_bestmeals')
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* 
* @description: setando headers HTTP que liberam acesso a determinadas funções CORS.
*               sem esses headers, quando o serviço for consumi, ocorre erro CORS pelo compartilhamento de recursos entre origens diferentes sem a devida permissão 
*/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

//Setando as rotas a serem usadas para consumir os serviços
app.use("/api/restaurant", restaurantRoutes);

module.exports = app;
