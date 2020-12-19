const router = require("express").Router();
const userController = require("../../controllers/UsuarioController");
//const auth = require("../../middlewares/auth.js");

//api/user/

router.post("/login", userController.login);
router.post("/register", userController.register);

module.exports = router;
