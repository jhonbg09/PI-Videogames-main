
const getGamesHandler = (req,res)=>{
    res.status(200).send("funciona la ruta/games");
}

const getDetailsHandler = (req,res)=>{
    res.status(200).send("funciona la /games/{id}");
}

const getSearchNameHandler = (req,res)=>{
    res.status(200).send("funciona la /games/?search={game}");
}

module.exports = {
    getDetailsHandler,
    getGamesHandler,
    getSearchNameHandler
}