const router = require("express").Router();
const product = require("../controllers/product.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", auth, product.create);
//get all
router.post("/getAll", auth, product.getAll);
//get one
router.post("/getbyId", auth, product.getbyId);
// delete one
router.post("/delete", auth, product.delete);
// update one
router.post("/update", auth, product.update);

module.exports = router;
