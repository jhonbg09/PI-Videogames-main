const { apiData} = require ('../controllers/genderControllers')

const getGenderAll = async (req, res) => {
  try {
    const infoGener = await apiData()
    res.status(201).json(infoGener)
  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener la información." });  }
};


module.exports = {
  getGenderAll
}