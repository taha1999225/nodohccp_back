const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class zoneDetailsService {
  //create zoneDetails
  static async create(data) {
    let zoneDetails = prisma.tb_zoneDetails.create({
      data: { ...data },
    });

    return zoneDetails;
  }
  //Get zoneDetails
  static async getAll(data) {
    let zoneDetails = prisma.tb_zoneDetails.findMany();
    return zoneDetails;
  }
  //Get by one
  static async getbyId(data) {
    let zoneDetails = prisma.tb_zoneDetails.findUnique({
      where: {
        id: data.id,
      },
    });
    return zoneDetails;
  }
  // delete one
  static async delete(data) {
    let zoneDetails = prisma.tb_zoneDetails.delete({
      where: {
        id: data.id,
      },
    });
    return zoneDetails;
  }
  static async update(data) {
   
    const updatezoneDetails = await prisma.tb_zoneDetails.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatezoneDetails;
  }
}

module.exports = zoneDetailsService;
