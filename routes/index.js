const express = require("express");
const router = express.Router();
const auth = require("./auth");
const product = require("./product");
const supplier = require("./supplier");
const category = require("./category");
const shift = require("./shift");
const history = require("./history");
const historyTB = require("./historyTB");


const createError = require("http-errors");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/auth", auth);
router.use("/product", product);
router.use("/supplier", supplier);
router.use("/category", category);
router.use("/shift", shift);
router.use("/history", history);
router.use("/historyTB", historyTB);

router.use(async (req, res, next) => {
  next(createError.NotFound("Route not Found"));
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: false,
    message: err.message,
  });
});

module.exports = router;
