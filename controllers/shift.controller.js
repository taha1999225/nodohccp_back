const shift = require("../services/shift.service");
const createError = require("http-errors");

class shiftController {
  static getAll = async (req, res, next) => {
    try {
      const data = await shift.getAll();
      res.status(200).json({
        status: true,
        message: "List of shift ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = shiftController;
