const { Router } = require("express");
const {getDetailsHandler,  getGamesHandler, getSearchNameHandler} = require('../handlers/gamesHandlers')

const gamesRouter = Router()

gamesRouter.get('/', getGamesHandler);

gamesRouter.get('/:id', getDetailsHandler);

gamesRouter.get('/?search={game}', getSearchNameHandler);



module.exports = gamesRouter;