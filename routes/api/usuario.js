const router = require("express").Router();
const userController = require("../../controllers/UsuarioController");
const auth = require("../../middlewares/auth.js");

//api/user/

router.post("/login", userController.login);
router.get("/list", userController.list);
router.post("/add", userController.add);
router.put("/update", userController.update);
router.put("/activate", userController.activate);
router.put("/deactivate", userController.deactivate);

module.exports = router;
