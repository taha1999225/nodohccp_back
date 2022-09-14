const cleanPlane = require("../services/cleanPlane.service");
const createError = require("http-errors");

class cleanPlaneController {
  static create = async (req, res, next) => {
    try {
      const data = await cleanPlane.create(req.body);
      res.status(200).json({
        status: true,
        message: "cleanPlane created ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await cleanPlane.getAll(req.body);
      res.status(200).json({
        status: true,
        message: "List of cleanPlane ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await cleanPlane.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "cleanPlane detail ",
        data: data? data :"there is no order with this id ",
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await cleanPlane.delete(req.body);
      res.status(200).json({
        status: true,
        message: "cleanPlane deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await cleanPlane.update(req.body);
      res.status(200).json({
        status: true,
        message: "cleanPlane updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = cleanPlaneController;
