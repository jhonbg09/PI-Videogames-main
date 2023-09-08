const {Videogame} = require('../db')

const createVideoGameDB = async (name, description, plataforms, image, releaseDate, ranting)=>{
    return await Videogame.create({name, description, plataforms, image, releaseDate, ranting}); 
}

module.exports = {
    createVideoGameDB
}