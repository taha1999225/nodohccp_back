const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");

class authService {
  static async register(data) {
    console.log(data);
    data.password = bcrypt.hashSync(data.password, 8);
    let user = prisma.tb_user.create({
      data: { ...data },
    });

    data.accessToken = await jwt.signAccessToken(user);

    return user;
  }

  static async login(data) {
    const { email, password } = data;
    const user = await prisma.tb_user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw createError.NotFound("User not registered");
    }
    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword)
      throw createError.Unauthorized("Email address or password not valid");

    delete user.password;

    const accessToken = await jwt.signAccessToken(user);

    return { ...user, accessToken };
  }

  static async all() {
    const allUsers = await prisma.tb_user.findMany();

    return allUsers;
  }
}

module.exports = authService;
