const historyTemp = require("../services/historyTemp.service");
const createError = require("http-errors");

class historyTempController {
  static create = async (req, res, next) => {
    try {
      const data = await historyTemp.create(req.body);
      res.status(200).json({
        status: true,
        message: "historyTemp created ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await historyTemp.getAll();
      res.status(200).json({
        status: true,
        message: "List of historyTemp ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await historyTemp.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "historyTemp detail ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await historyTemp.delete(req.body);
      res.status(200).json({
        status: true,
        message: "historyTemp deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await historyTemp.update(req.body);
      res.status(200).json({
        status: true,
        message: "historyTemp updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = historyTempController;
