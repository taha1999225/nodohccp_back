const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class productDileveryService {
  //create productDilevery
  static async create(data) {
    let productDilevery = prisma.tb_productDilevery.create({
      data: { ...data },
    });

    return productDilevery;
  }
  //Get productDilevery
  static async getAll(data) {
    let proudct = prisma.tb_productDilevery.findMany({
      where: {
        id_user: data.id,
      },
    });
    return proudct;
  }
  //Get by one
  static async getbyId(data) {
    let proudct = prisma.tb_productDilevery.findUnique({
      where: {
        id: data.id,
      },
    });
    return proudct;
  }
  // delete one
  static async delete(data) {
    let proudct = prisma.tb_productDilevery.delete({
      where: {
        id: data.id,
      },
    });
    return proudct;
  }
  static async update(data) {
    //  console.log(data);
    const updateproductDileverys = await prisma.tb_productDilevery.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updateproductDileverys;
  }
}

module.exports = productDileveryService;
