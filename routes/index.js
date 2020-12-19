const router = require("express").Router();
const apiRouterUser = require("./api/usuario");
const apiRouterCategoria = require("./api/categoria");
const apiRouterArticulo = require("./api/articulo");

// const router = routerx();

//Enrutador
router.use("/usuario", apiRouterUser); //.com/api/user
router.use("/categoria", apiRouterCategoria); //.com/api/categoria
router.use("/articulo", apiRouterArticulo); //.com/api/articulo

module.exports = router;
