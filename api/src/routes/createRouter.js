const { Router } = require('express')

const createRouter =  Router();

createRouter.post('/createGame',(req,res)=>{
   res.status(200).send("funciona la ruta de creacion de juegos");
});

module.exports = createRouter;