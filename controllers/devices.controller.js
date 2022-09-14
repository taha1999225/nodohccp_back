const devices = require("../services/devices.service");
const createError = require("http-errors");

class devicesController {
  static create = async (req, res, next) => {
    try {
      const data = await devices.create(req.body);
      res.status(200).json({
        status: true,
        message: "devices created ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await devices.getAll(req.body);
      res.status(200).json({
        status: true,
        message: "List of devices ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await devices.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "devices detail ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await devices.delete(req.body);
      res.status(200).json({
        status: true,
        message: "devices deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
      
      
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await devices.update(req.body);
      res.status(200).json({
        status: true,
        message: "devices updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
     
      
    }
  };
}

module.exports = devicesController;
