const { Router } = require("express");
const {getDetailsHandler,  getCreateGamesHandler, getSearchNameHandler} = require('../handlers/gamesHandlers')

const gamesRouter = Router()

//Query
gamesRouter.get('/', getSearchNameHandler);

//params
gamesRouter.post('/', getCreateGamesHandler);

//Params
gamesRouter.get('/:id', getDetailsHandler);





module.exports = gamesRouter;