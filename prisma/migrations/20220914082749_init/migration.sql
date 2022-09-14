-- CreateTable
CREATE TABLE `Tb_correction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `correction` VARCHAR(191) NULL,
    `id_user` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
