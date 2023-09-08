const { createVideoGameDB }= require('../controllers/gamesControllers')

// Query
const getSearchNameHandler = (req, res) => {
    const { videoGame, gender } = req.query;
    
    if (videoGame || gender) {
        return res.status(200).send(`Nombre: ${videoGame} Gender: ${gender}`);
    }

    res.status(200).send(`Todos los videogames`);
};

//Body
const getCreateGamesHandler = async (req, res) => {
  const {name, description, plataforms, image, releaseDate, ranting} = req.body
  
  try {
    
    const response = await createVideoGameDB(name, description, plataforms, image, releaseDate, ranting);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error:error.message});
  }

};

// params
const getDetailsHandler = (req, res) => {
  const { id } = req.params;
  try {
    const response = getVideoGameId()
  } catch (error) {
    res.status(400).json({error:error.message});
  }
};



module.exports = {
  getDetailsHandler,
  getCreateGamesHandler,
  getSearchNameHandler,
};
