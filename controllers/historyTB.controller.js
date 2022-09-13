const historyTB = require("../services/historyTB.service");
const createError = require("http-errors");

class historyTBController {
  static create = async (req, res, next) => {
    try {
      const data = await historyTB.create(req.body);
      res.status(200).json({
        status: true,
        message: "historyTB created ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await historyTB.getAll();
      res.status(200).json({
        status: true,
        message: "List of historyTB ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await historyTB.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "historyTB detail ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await historyTB.delete(req.body);
      res.status(200).json({
        status: true,
        message: "historyTB deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await historyTB.update(req.body);
      res.status(200).json({
        status: true,
        message: "historyTB updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = historyTBController;
