const { config } = require('dotenv')
const {Genre} = require ('../db')
const { default: axios } = require('axios')
require ("dotenv").config()

const {API_KEY} = process.env
const URL = "https://api.rawg.io/api"

const apiData = async ()=> 
    await axios.get(`${URL}/genres?key=${API_KEY}`)
    .then(async(response)=>{
        const data = response.data.results;
        const genres = data.map((genre) => genre.name);
        const newGenres = await Genre.bulkCreate(genres.map((name) => ({ name })));
        console.log(genres)
        console.log(newGenres)
        return newGenres

});


module.exports = {
    apiData
}