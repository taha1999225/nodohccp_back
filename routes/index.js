const express = require("express");
const router = express.Router();
const auth = require("./auth");
const product = require("./product");
const supplier = require("./supplier");
const category = require("./category");
const shift = require("./shift");
const history = require("./history");
const historyTB = require("./historyTB");
const correction = require("./correction");
const historyTemp = require("./historyTemp");
const devices = require("./devices");
const zone = require("./zone");
const zoneDetails = require("./zoneDetails");
const cleanPlane = require("./cleanPlane");
const cleanPlaneDetails = require("./cleanPlaneDetails");
const huile = require("./huile");
const huileDevice = require("./huileDevice");
const productDilevery = require("./productDilevery");



const createError = require("http-errors");
const { route } = require("./auth");

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
router.use("/correction", correction);
router.use("/history_temp", historyTemp);
router.use("/devices", devices);
router.use("/zone", zone);
router.use("/zoneDetails", zoneDetails);
router.use("/clean-plane", cleanPlane);
router.use("/clean-plane-details", cleanPlaneDetails);
router.use("/huile", huile);
router.use("/huile-device", huileDevice);
router.use("/product-dilevery", productDilevery);


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
