const history = require("../services/history.service");
const createError = require("http-errors");

class historyController {
  static create = async (req, res, next) => {
    try {
      const data = await history.create(req.body);
      res.status(200).json({
        status: true,
        message: "history created ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await history.getAll();
      res.status(200).json({
        status: true,
        message: "List of history ",
        data:data
        
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await history.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "history detail ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await history.delete(req.body);
      res.status(200).json({
        status: true,
        message: "history deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
      
      
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await history.update(req.body);
      res.status(200).json({
        status: true,
        message: "history updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
     
      
    }
  };
}

module.exports = historyController;
