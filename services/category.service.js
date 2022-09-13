const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class categoryService {
  //Get category
  static async getAll() {
    let category = prisma.tb_product_category.findMany();
    return category;
  }
}

module.exports = categoryService;
