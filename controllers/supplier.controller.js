const supplier = require("../services/supplier.service");
const createError = require("http-errors");

class supplierController {
  static create = async (req, res, next) => {
    try {
      const supp = await supplier.create(req.body);
      res.status(200).json({
        status: true,
        message: "supplier created ",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const supp = await supplier.getAll();
      res.status(200).json({
        status: true,
        message: "List of supplier ",
        data:supp
        
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const supp = await supplier.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "supplier detail ",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const supp = await supplier.delete(req.body);
      res.status(200).json({
        status: true,
        message: "supplier deleted",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
      
      
    }
  };
  static update = async (req, res, next) => {
    try {
      const supp = await supplier.update(req.body);
      res.status(200).json({
        status: true,
        message: "supplier updated",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
     
      
    }
  };
}

module.exports = supplierController;
