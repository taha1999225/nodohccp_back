const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class productService {
  //create product
  static async create(data) {
    let product = prisma.tb_product.create({
      data: { ...data },
    });

    return product;
  }
  //Get product
  static async getAll(data) {
    let proudct = prisma.tb_product.findMany({
      where: {
        id_user: data.id,
      },
    });
    return proudct;
  }
  //Get by one
  static async getbyId(data) {
    let proudct = prisma.tb_product.findUnique({
      where: {
        id: data.id,
      },
    });
    return proudct;
  }
  // delete one
  static async delete(data) {
    let proudct = prisma.tb_product.delete({
      where: {
        id: data.id,
      },
    });
    return proudct;
  }
  static async update(data) {
    //  console.log(data);
    const updateProducts = await prisma.tb_product.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updateProducts;
  }
}

module.exports = productService;
