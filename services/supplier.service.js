const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class supplierService {
  //create supplier
  static async create(data) {
    let supplier = prisma.tb_supplier.create({
      data: { ...data },
    });

    return supplier;
  }
  //Get supplier
  static async getAll(data) {
    let supplier = prisma.tb_supplier.findMany();
    return supplier;
  }
  //Get by one
  static async getbyId(data) {
    let supplier = prisma.tb_supplier.findUnique({
      where: {
        id: data.id,
      },
    });
    return supplier;
  }
  // delete one
  static async delete(data) {
    let supplier = prisma.tb_supplier.delete({
      where: {
        id: data.id,
      },
    });
    return supplier;
  }
  static async update(data) {
    //  console.log(data);
    const updatesuppliers = await prisma.tb_supplier.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatesuppliers;
  }
}

module.exports = supplierService;
