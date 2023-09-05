const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const gamesRouter = require('./gamesRouter');
const createRouter = require('./createRouter')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/games', gamesRouter);
router.use('/createGame', createRouter);



module.exports = router;
