const cleanPlaneDetails = require("../services/cleanPlaneDetails.service");
const createError = require("http-errors");

class cleanPlaneDetailsController {
  static create = async (req, res, next) => {
    try {
      const data = await cleanPlaneDetails.create(req.body);
      res.status(200).json({
        status: true,
        message: "cleanPlaneDetails created ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await cleanPlaneDetails.getAll(req.body);
      res.status(200).json({
        status: true,
        message: "List of cleanPlaneDetails ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await cleanPlaneDetails.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "cleanPlaneDetails detail ",
        data: data? data :"there is no order with this id ",
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await cleanPlaneDetails.delete(req.body);
      res.status(200).json({
        status: true,
        message: "cleanPlaneDetails deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await cleanPlaneDetails.update(req.body);
      res.status(200).json({
        status: true,
        message: "cleanPlaneDetails updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = cleanPlaneDetailsController;
