const huileDevice = require("../services/huileDevice.service");
const createError = require("http-errors");

class huileDeviceController {
  static create = async (req, res, next) => {
    try {
      const data = await huileDevice.create(req.body);
      res.status(200).json({
        status: true,
        message: "huileDevice created ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await huileDevice.getAll();
      res.status(200).json({
        status: true,
        message: "List of huileDevice ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await huileDevice.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "huileDevice detail ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await huileDevice.delete(req.body);
      res.status(200).json({
        status: true,
        message: "huileDevice deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await huileDevice.update(req.body);
      res.status(200).json({
        status: true,
        message: "huileDevice updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = huileDeviceController;
