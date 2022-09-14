const zone = require("../services/zone.service");
const createError = require("http-errors");

class zoneController {
  static create = async (req, res, next) => {
    try {
      const supp = await zone.create(req.body);
      res.status(200).json({
        status: true,
        message: "zone created ",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const supp = await zone.getAll();
      res.status(200).json({
        status: true,
        message: "List of zone ",
        data:supp
        
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const supp = await zone.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "zone detail ",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const supp = await zone.delete(req.body);
      res.status(200).json({
        status: true,
        message: "zone deleted",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
      
      
    }
  };
  static update = async (req, res, next) => {
    try {
      const supp = await zone.update(req.body);
      res.status(200).json({
        status: true,
        message: "zone updated",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
     
      
    }
  };
}

module.exports = zoneController;
