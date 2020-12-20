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

exports.add = async (req, res, next) => {
  try {
    const registro = await db.Usuario.create(req.body);
    res.status(200).json(registro);
  } catch (error) {
    res.status(500).send({
      message: "Error",
    });
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const register = await db.Usuario.update(
      {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
      },
      { where: { id: req.body.id } }
    );
    res.status(200).json(register);
  } catch (error) {
    res.status(500).send({
      message: "error",
    });
    next(error);
  }
};

exports.activate = async (req, res, next) => {
  try {
    const register = await db.Usuario.update(
      {
        estado: 1,
      },
      { where: { id: req.body.id } }
    );
    res.status(200).json(register);
  } catch (error) {
    res.status(500).send({
      message: "error",
    });
    next(error);
  }
};

exports.deactivate = async (req, res, next) => {
  try {
    const register = await db.Usuario.update(
      {
        estado: 0,
      },
      { where: { id: req.body.id } }
    );
    res.status(200).json(register);
  } catch (error) {
    res.status(500).send({
      message: "error",
    });
    next(error);
  }
};
