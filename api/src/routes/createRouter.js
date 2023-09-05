const { Router } = require('express')
const { createGameHandlers } = require('../handlers/createGameHandlers.js')

const createRouter =  Router();


createRouter.post('/createGame', createGameHandlers);

module.exports = createRouter;