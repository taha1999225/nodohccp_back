const router = require("express").Router();
const supplier = require("../controllers/supplier.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", auth, supplier.create);
//get all
router.get("/getAll", auth, supplier.getAll);
//get one
router.post("/getbyId", auth, supplier.getbyId);
// delete one
router.post("/delete", auth, supplier.delete);
// update one
router.post("/update", auth, supplier.update);

module.exports = router;
