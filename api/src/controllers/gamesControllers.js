const {Videogame} = require('../db')

const createVideoGameDB = async (name, description, plataforms, image, releaseDate, ranting)=>{
    return await Videogame.create({name, description, plataforms, image, releaseDate, ranting}); 
}

const getVideoGameId= async(id, source) =>{

}

module.exports = {
    createVideoGameDB,
    getVideoGameId
}