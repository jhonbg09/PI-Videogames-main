const { Router } = require("express");

const gamesRouter = Router()

gamesRouter.get('/games',(req,res)=>{
    res.status(200).send("funciona la ruta/games");
});

gamesRouter.get('/games/{id}',(req,res)=>{
    res.status(200).send("funciona la /games/{id}");
});

gamesRouter.get('/games/?search={game}',(req,res)=>{
    res.status(200).send("funciona la /games/?search={game}");
});



module.exports = gamesRouter;