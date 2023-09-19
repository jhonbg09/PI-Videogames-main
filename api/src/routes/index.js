const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const gamesRouter = require("./gamesRouter");
const genderRouter = require("./genreRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/games", gamesRouter);
router.use("/gender", genderRouter);

module.exports = router;
