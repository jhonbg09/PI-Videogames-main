const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  // todos los modelos deben tener un ID
  sequelize.define("videogame", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    plataforms: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Colocamos en DataTypes.ARRAY para colocar en un arreglo  varias plataformas y colocamos de nuevo DataType.STRING para indicar que vamos a recibir en el arreglo una cadena de caracteres.
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    releaseDate: {
      type: DataTypes.DATE,
    },

    rating: {
      type: DataTypes.FLOAT, //hace referencia a un numero con coma flotante.
    },
  });

};
