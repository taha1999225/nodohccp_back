const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class zoneService {
  //create zone
  static async create(data) {
    let zone = prisma.tb_zone.create({
      data: { ...data },
    });

    return zone;
  }
  //Get zone
  static async getAll(data) {
    let zone = prisma.tb_zone.findMany();
    return zone;
  }
  //Get by one
  static async getbyId(data) {
    let zone = prisma.tb_zone.findUnique({
      where: {
        id: data.id,
      },
    });
    return zone;
  }
  // delete one
  static async delete(data) {
    let zone = prisma.tb_zone.delete({
      where: {
        id: data.id,
      },
    });
    return zone;
  }
  static async update(data) {
    //  console.log(data);
    const updatezones = await prisma.tb_zone.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatezones;
  }
}

module.exports = zoneService;
