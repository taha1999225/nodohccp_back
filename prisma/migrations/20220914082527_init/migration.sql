-- CreateTable
CREATE TABLE `Tb_history_temperature` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NULL,
    `id_device` INTEGER NULL,
    `note` VARCHAR(191) NULL,
    `id_photo` VARCHAR(191) NULL,
    `id_correction` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
