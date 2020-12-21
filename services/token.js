var jwt = require("jsonwebtoken");
const db = require("../models");

module.exports = {
  //generar el token
  encode: async (user) => {
    const token = jwt.sign(
      {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol,
        estado: user.estado,
      },
      "config.secret",
      {
        expiresIn: 86400,
      }
    );
    return token;
  },
  //permite decodificar el token
  decode: async (token) => {
    try {
      const { id } = await jwt.verify(token, "config.secret");

      const user = await db.Usuario.findOne({
        where: {
          id: id,
          //estado: 1,
        },
      });

      if (user) {
        return user;
      } else {
        return false;
      }
    } catch (e) {
      const newToken = await checkToken(token);
      return newToken;
    }
  },
};
