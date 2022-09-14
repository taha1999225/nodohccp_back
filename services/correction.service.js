const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class correctionService {
  //create correction
  static async create(data) {
    let correction = prisma.tb_correction.create({
      data: { ...data },
    });

    return correction;
  }
  //Get correction
  static async getAll(data) {
    let correction = prisma.tb_correction.findMany({
      where: {
        id_user: data.id,
      },
    });
    return correction;
  }
  //Get by one
  static async getbyId(data) {
    let correction = prisma.tb_correction.findUnique({
      where: {
        id: data.id,
      },
    });
    return correction;
  }
  // delete one
  static async delete(data) {
    let correction = prisma.tb_correction.delete({
      where: {
        id: data.id,
      },
    });
    return correction;
  }
  static async update(data) {
    //  console.log(data);
    const updatecorrections = await prisma.tb_correction.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatecorrections;
  }
}

module.exports = correctionService;
