-- CreateTable
CREATE TABLE `Tb_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NULL,
    `company` VARCHAR(191) NULL,
    `siret` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `user_active` INTEGER NULL DEFAULT 1,

    UNIQUE INDEX `Tb_user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tb_supplier` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NULL,
    `siret` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,

    UNIQUE INDEX `Tb_supplier_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tb_product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NULL,
    `id_category` INTEGER NULL,
    `qty_category` INTEGER NULL,
    `limit_day` INTEGER NULL,
    `alert_day` INTEGER NULL,
    `allergene` JSON NULL,
    `id_supplier` INTEGER NULL,
    `id_user` INTEGER NULL,

    UNIQUE INDEX `Tb_product_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tb_entrance_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_product` INTEGER NULL,
    `consomation_date` DATETIME(3) NOT NULL,
    `id_shift` INTEGER NULL,
    `id_user` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tb_entrance_history_tb` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hisotry_id` INTEGER NULL,
    `note` VARCHAR(191) NULL,
    `photo` VARCHAR(191) NULL,
    `id_user` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tb_product_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tb_shift` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `shift` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
