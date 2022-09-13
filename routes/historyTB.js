const router = require("express").Router();
const historyTB = require("../controllers/historyTB.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", auth, historyTB.create);
//get all
router.get("/getAll", auth, historyTB.getAll);
//get one
router.post("/getbyId", auth, historyTB.getbyId);
// delete one
router.post("/delete", auth, historyTB.delete);
// update one
router.post("/update", auth, historyTB.update);

module.exports = router;
