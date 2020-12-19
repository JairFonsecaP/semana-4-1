const db = require("../models");
const bcrypt = require("bcryptjs");
const tokenServices = require("../services/token");

exports.login = async (req, res, next) => {
  try {
    const user = await db.Usuario.findOne({
      where: { email: req.body.email },
    });

    if (user) {
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (passwordIsValid) {
        const token = await tokenServices.encode(user);
        res.status(200).send({
          user,
          tokenReturn: token,
          //user: user
        });
      } else {
        res.status(401).json({
          error: "Error en usuario o contraseña",
        });
      }
    } else {
      res.status(404).json({ error: "Error en usuario o contraseña" });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error -->  ",
    });
    next(error);
  }
};

exports.register = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const user = await db.Usuario.create(req.body);
  res.status(200).json(user);
};
