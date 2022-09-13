const category = require("../services/category.service");
const createError = require("http-errors");

class categoryController {
  static getAll = async (req, res, next) => {
    try {
      const cat = await category.getAll();
      res.status(200).json({
        status: true,
        message: "List of category ",
        data:cat
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = categoryController;
