const router = require("express").Router();
const history = require("../controllers/history.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", auth, history.create);
//get all
router.get("/getAll", auth, history.getAll);
//get one
router.post("/getbyId", auth, history.getbyId);
// delete one
router.post("/delete", auth, history.delete);
// update one
router.post("/update", auth, history.update);

module.exports = router;
