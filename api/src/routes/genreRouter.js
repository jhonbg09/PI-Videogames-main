const { Router } = require('express')
const { getGenderAll } = require('../handlers/genderHandlers.js')

const genderRouter =  Router();

genderRouter.get('/', getGenderAll);


module.exports = genderRouter;