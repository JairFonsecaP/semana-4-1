const db = require("../models");

exports.list = async (req, res, next) => {
  try {
    const register = await db.Categoria.findAll();

    if (register) {
      res.status(200).json(register);
    } else {
      res.status(404).send({
        message: "No hay categorias registradas",
      });
    }
  } catch (error) {
    console.log("Hola error");
    res.status(500).send({
      message: "Error",
    });
    next(error);
  }
};

exports.add = async (req, res, next) => {
  try {
    const registro = await db.Categoria.create(req.body);
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
    const register = await db.Categoria.update(
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
    const register = await db.Categoria.update(
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
    const register = await db.Categoria.update(
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
