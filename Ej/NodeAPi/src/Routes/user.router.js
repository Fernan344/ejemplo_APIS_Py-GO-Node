const express = require("express");
const router = express.Router();
const controlador = require("../Controller/user.controller")

router.get("/prueba", controlador.prueba);
router.post("/login", controlador.login);

module.exports = router;