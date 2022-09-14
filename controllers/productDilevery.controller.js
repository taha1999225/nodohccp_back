const productDilevery = require("../services/productDilevery.service");
const createError = require("http-errors");

class productDileveryController {
  static create = async (req, res, next) => {
    try {
      const prod = await productDilevery.create(req.body);
      res.status(200).json({
        status: true,
        message: "productDilevery created ",
        data: prod,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const prod = await productDilevery.getAll(req.body);
      res.status(200).json({
        status: true,
        message: "List of productDilevery ",
        data: prod,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const prod = await productDilevery.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "productDilevery detail ",
        data: prod,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const prod = await productDilevery.delete(req.body);
      res.status(200).json({
        status: true,
        message: "productDilevery deleted",
        data: prod,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
      
      
    }
  };
  static update = async (req, res, next) => {
    try {
      const prod = await productDilevery.update(req.body);
      res.status(200).json({
        status: true,
        message: "productDilevery updated",
        data: prod,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
     
      
    }
  };
}

module.exports = productDileveryController;
