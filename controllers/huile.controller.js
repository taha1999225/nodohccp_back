const huile = require("../services/huile.service");
const createError = require("http-errors");

class huileController {
  static create = async (req, res, next) => {
    try {
      const data = await huile.create(req.body);
      res.status(200).json({
        status: true,
        message: "huile created ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await huile.getAll();
      res.status(200).json({
        status: true,
        message: "List of huile ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await huile.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "huile detail ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await huile.delete(req.body);
      res.status(200).json({
        status: true,
        message: "huile deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await huile.update(req.body);
      res.status(200).json({
        status: true,
        message: "huile updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = huileController;
