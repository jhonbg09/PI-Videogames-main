// Query
const getSearchNameHandler = (req, res) => {
    const { videoGame, gender } = req.query;
    
    if (videoGame || gender) {
        return res.status(200).send(`Nombre: ${videoGame} Gender: ${gender}`);
    }

    res.status(200).send(`Todos los videogames`);
};

//Body
const getCreateGamesHandler = (req, res) => {
  const {name, gender, calification} = req.body
  res.status(200).send(`videogame: ${name} de genero ${gender} su calificacion ${calification}`);
};

// params
const getDetailsHandler = (req, res) => {
  const { id } = req.params;

  res.status(200).send(`Detalle de video game ${id}`);
};



module.exports = {
  getDetailsHandler,
  getCreateGamesHandler,
  getSearchNameHandler,
};
