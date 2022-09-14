const router = require("express").Router();
const huile = require("../controllers/huile.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", auth, huile.create);
//get all
router.get("/getAll", auth, huile.getAll);
//get one
router.post("/getbyId", auth, huile.getbyId);
// delete one
router.post("/delete", auth, huile.delete);
// update one
router.post("/update", auth, huile.update);

module.exports = router;
