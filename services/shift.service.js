const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class shiftService {
  //Get shift
  static async getAll() {
    let shift = prisma.tb_shift.findMany();
    return shift;
  }
}

module.exports = shiftService;
