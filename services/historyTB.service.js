const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class historyTBService {
  //create historyTB
  static async create(data) {
    let historyTB = prisma.tb_entrance_history_tb.create({
      data: { ...data },
    });

    return historyTB;
  }
  //Get historyTB
  static async getAll() {
    let historyTB = prisma.tb_entrance_history_tb.findMany();
    return historyTB;
  }
  //Get by one
  static async getbyId(data) {
    let historyTB = prisma.tb_entrance_history_tb.findUnique({
      where: {
        id: data.id,
      },
    });
    return historyTB;
  }
  // delete one
  static async delete(data) {
    let historyTB = prisma.tb_entrance_history_tb.delete({
      where: {
        id: data.id,
      },
    });
    return historyTB;
  }
  static async update(data) {
    //  console.log(data);
    const updatehistoryTB = await prisma.tb_entrance_history_tb.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatehistoryTB;
  }
}

module.exports = historyTBService;
