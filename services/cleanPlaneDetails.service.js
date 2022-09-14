const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class cleanPlaneDetailsService {
  //create cleanPlaneDetails
  static async create(data) {
    let cleanPlaneDetails = prisma.tb_clean_plane_details.create({
      data: { ...data },
    });

    return cleanPlaneDetails;
  }
  //Get cleanPlaneDetails
  static async getAll(data) {
    let cleanPlaneDetails = prisma.tb_clean_plane_details.findMany({
      where: {
        id_user: data.id,
      },
    });
    return cleanPlaneDetails;
  }
  //Get by one
  static async getbyId(data) {
    let cleanPlaneDetails = prisma.tb_clean_plane_details.findUnique({
      where: {
        id: data.id,
      },
    });
    return cleanPlaneDetails;
  }
  // delete one
  static async delete(data) {
    let cleanPlaneDetails = prisma.tb_clean_plane_details.delete({
      where: {
        id: data.id,
      },
    });
    return cleanPlaneDetails;
  }
  static async update(data) {
    //  console.log(data);
    const updatecleanPlaneDetailss = await prisma.tb_clean_plane_details.update(
      {
        where: {
          id: data.id,
        },
        data: {
          ...data,
        },
      }
    );
    return updatecleanPlaneDetailss;
  }
}

module.exports = cleanPlaneDetailsService;
