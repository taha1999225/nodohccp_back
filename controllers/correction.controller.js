const correction = require("../services/correction.service");
const createError = require("http-errors");

class correctionController {
  static create = async (req, res, next) => {
    try {
      const data = await correction.create(req.body);
      res.status(200).json({
        status: true,
        message: "correction created ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await correction.getAll(req.body);
      res.status(200).json({
        status: true,
        message: "List of correction ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await correction.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "correction detail ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await correction.delete(req.body);
      res.status(200).json({
        status: true,
        message: "correction deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
      
      
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await correction.update(req.body);
      res.status(200).json({
        status: true,
        message: "correction updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
     
      
    }
  };
}

module.exports = correctionController;
