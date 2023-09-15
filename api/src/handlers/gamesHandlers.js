const { createVideoGameDB, getVideoGameId, getVideoGameAll, videoGameByName} = require('../controllers/gamesControllers')


// Query
const getSearchNameHandler = async (req, res) => {
    const { name } = req.query;
    try {
      const results = name ? await videoGameByName(name) : await getVideoGameAll();
      res.status(200).json(results)
    } catch (error) {
      res.status(400).json({error:error.message});
    }
  };

//Body
const getCreateGamesHandler = async (req, res) => {
  const {name, description, plataforms, image, releaseDate, rating} = req.body
  
  try {
    
    const response = await createVideoGameDB(name, description, plataforms, image, releaseDate, rating, created = true);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error:error.message});
  }

};

// params
const getDetailsHandler = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id)? "bdd" : "api";

  try {
    const response = await getVideoGameId(id, source);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error:error.message});
  }
};



module.exports = {
  getDetailsHandler,
  getCreateGamesHandler,
  getSearchNameHandler,
};
