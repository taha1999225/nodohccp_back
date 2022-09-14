const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class huileDeviceService {
  //create huileDevice
  static async create(data) {
    let huileDevice = prisma.tb_huile_device.create({
      data: { ...data },
    });

    return huileDevice;
  }
  //Get huileDevice
  static async getAll(data) {
    let huileDevice = prisma.tb_huileDevice.findMany();
    return huileDevice;
  }
  //Get by one
  static async getbyId(data) {
    let huileDevice = prisma.tb_huileDevice.findUnique({
      where: {
        id: data.id,
      },
    });
    return huileDevice;
  }
  // delete one
  static async delete(data) {
    let huileDevice = prisma.tb_huileDevice.delete({
      where: {
        id: data.id,
      },
    });
    return huileDevice;
  }
  static async update(data) {
    //  console.log(data);
    const updatehuileDevice = await prisma.tb_huileDevice.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatehuileDevice;
  }
}

module.exports = huileDeviceService;
