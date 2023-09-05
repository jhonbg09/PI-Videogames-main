const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/games',(req,res)=>{});
router.get('/games/{id}',(req,res)=>{});
router.get('/games/?search={game}',(req,res)=>{});


module.exports = router;
