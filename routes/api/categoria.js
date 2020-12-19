const router = require("express").Router();
const categoriaController = require("../../controllers/CategoriaController");
const auth = require("../../middlewares/auth.js");

//api/user/

router.get("/list", auth.verifyUsuario, categoriaController.list);
router.post("/add", auth.verifyUsuario, categoriaController.add);
router.put("/update", auth.verifyUsuario, categoriaController.update);
router.put("/activate", auth.verifyUsuario, categoriaController.activate);
router.put("/deactivate", auth.verifyUsuario, categoriaController.deactivate);

module.exports = router;
