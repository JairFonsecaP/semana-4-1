const router = require("express").Router();
const userController = require("../../controllers/UsuarioController");
const auth = require("../../middlewares/auth.js");

//api/user/

router.post("/login", userController.login);
router.get("/list", auth.verifyUsuario, userController.list);
router.post("/add", auth.verifyUsuario, userController.add);
router.put("/update", auth.verifyUsuario, userController.update);
router.put("/activate", auth.verifyUsuario, userController.activate);
router.put("/deactivate", auth.verifyUsuario, userController.deactivate);

module.exports = router;
