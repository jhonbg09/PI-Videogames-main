const { Videogame } = require("../db");
const axios = require("axios");
require("dotenv").config();

const { API_KEY } = process.env;

const createVideoGameDB = async (
  name,
  description,
  plataforms,
  image,
  releaseDate,
  rating,
  genre
  
) => {
  return await Videogame.create({
    name,
    description,
    plataforms,
    image,
    releaseDate,
    rating,
    genre
  });
};

//NOTA: No olvidar modularizar esta funcion
const cleanArrayApi = (arr) => {
  const clean = arr.map((elem) => {
    return {
      id: elem.id,
      name: elem.name,
      description: elem.description,
      platforms: elem.platforms
        .map((platform) => platform.platform.name)
        .join(", "),
      image: elem.background_image,
      releaseDate: elem.released,
      rating: elem.rating,
      create: false,
    };
  });
  return clean;
};

//Nota: NO OLVIDAR LIMPIAR EL ID
const getVideoGameId = async (id, source) => {
  const game =
    source === "api"
      ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`))
          .data
      : await Videogame.findByPk(id);
  return game;
};

const getVideoGameAll = async () => {
  const videoGamesDB = await Videogame.findAll();
  // const videoGamesApi =(await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results
  const response = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}`
  );
  const videoGamesApi = response.data.results; // Asegurarnos de que tomamos 'results'
  const apiClean = cleanArrayApi(videoGamesApi);
  //En las lineas siguientes estoy realizando pruebas saber si me estan llegando la info de la api y bdd
  // const videoGamesApiDBAll = [...apiClean, ...videoGamesDB];
  // console.log(videoGamesApiDBAll);
  return [...videoGamesDB, ...apiClean]; //estoy uniendo las dos respuesats api - bdd
};

const videoGameByName = async (name) => {
  const videoGamesDB = await Videogame.findAll({
    where: {
      name, //name:name
    },
  });

  const response = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}`
  );
  const videoGamesApi = response.data.results; // Asegurarnos de que tomamos 'results'

  const apiClean = cleanArrayApi(videoGamesApi);

  const apiFilter = apiClean.filter((game) => {
    //NOTA: SE DEBE BUSCAR UN METODO QUE LO HAGA COMO BUSQUEDA INEXACTA
    return game.name === name;
  });
  return [...videoGamesDB, ...apiFilter];
};

module.exports = {
  createVideoGameDB,
  getVideoGameId,
  getVideoGameAll,
  videoGameByName,
};
