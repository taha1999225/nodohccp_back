const router = require("express").Router();
const productDilevery = require("../controllers/productDilevery.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", auth, productDilevery.create);
//get all
router.post("/getAll", auth, productDilevery.getAll);
//get one
router.post("/getbyId", auth, productDilevery.getbyId);
// delete one
router.post("/delete", auth, productDilevery.delete);
// update one
router.post("/update", auth, productDilevery.update);

module.exports = router;
