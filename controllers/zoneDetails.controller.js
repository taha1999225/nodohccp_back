const zoneDetails = require("../services/zoneDetails.service");
const createError = require("http-errors");

class zoneDetailsController {
  static create = async (req, res, next) => {
    try {
      const data = await zoneDetails.create(req.body);
      res.status(200).json({
        status: true,
        message: "zoneDetails created ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await zoneDetails.getAll();
      res.status(200).json({
        status: true,
        message: "List of zoneDetails ",
        data:data
        
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await zoneDetails.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "zoneDetails detail ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await zoneDetails.delete(req.body);
      res.status(200).json({
        status: true,
        message: "zoneDetails deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
      
      
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await zoneDetails.update(req.body);
      res.status(200).json({
        status: true,
        message: "zoneDetails updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
     
      
    }
  };
}

module.exports = zoneDetailsController;
