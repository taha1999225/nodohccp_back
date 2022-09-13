const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class historyService {
  //create history
  static async create(data) {
    let history = prisma.tb_entrance_history.create({
      data: { ...data },
    });

    return history;
  }
  //Get history
  static async getAll(data) {
    let history = prisma.tb_entrance_history.findMany();
    return history;
  }
  //Get by one
  static async getbyId(data) {
    let history = prisma.tb_entrance_history.findUnique({
      where: {
        id: data.id,
      },
    });
    return history;
  }
  // delete one
  static async delete(data) {
    let history = prisma.tb_entrance_history.delete({
      where: {
        id: data.id,
      },
    });
    return history;
  }
  static async update(data) {
    //  console.log(data);
    const updatehistory = await prisma.tb_entrance_history.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatehistory;
  }
}

module.exports = historyService;
