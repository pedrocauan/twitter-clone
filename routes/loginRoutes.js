//imports
const express = require("express");
const app = express();
const router = express.Router();


//Configurações
app.set("view engine", "pug"),
app.set("views", "views")

//rotas
router.get("/", (req, res, next) => {
    res.status(200).render("login");
})

module.exports = router; 