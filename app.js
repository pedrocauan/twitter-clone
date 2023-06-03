//imports
const express = require("express");
const app = express();

//middlewares
const middleware = require("./middleware")

const port = 3003;

//rota o server
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

//Configurações
app.set("view engine", "pug"),
app.set("views", "views")

//rotas
app.get("/", middleware.requireLogin, (req, res, next) => {
    const payload = {
        pageTitle: "home"

    }
    res.status(200).render("home", payload);
})