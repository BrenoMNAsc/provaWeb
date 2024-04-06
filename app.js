const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Rotas
require("./routes/food.routes")(app);


//O servidor estará rodando em http://localhost:8080.
app.listen(8080, () => { console.log("Server is running") });