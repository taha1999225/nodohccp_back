const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class cleanPlaneService {
  //create cleanPlane
  static async create(data) {
    let cleanPlane = prisma.tb_clean_plane.create({
      data: { ...data },
    });

    return cleanPlane;
  }
  //Get cleanPlane
  static async getAll(data) {
    let cleanPlane = prisma.tb_clean_plane.findMany({
      where: {
        id_user: data.id,
      },
    });
    return cleanPlane;
  }
  //Get by one
  static async getbyId(data) {
    let cleanPlane = prisma.tb_clean_plane.findUnique({
      where: {
        id: data.id,
      },
    });
    return cleanPlane;
  }
  // delete one
  static async delete(data) {
    let cleanPlane = prisma.tb_clean_plane.delete({
      where: {
        id: data.id,
      },
    });
    return cleanPlane;
  }
  static async update(data) {
    //  console.log(data);
    const updatecleanPlanes = await prisma.tb_clean_plane.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatecleanPlanes;
  }
}

module.exports = cleanPlaneService;
