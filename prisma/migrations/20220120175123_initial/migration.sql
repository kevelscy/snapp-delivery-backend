-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `emailHashed` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `lastname` VARCHAR(191) NULL,
    `username` VARCHAR(191) NOT NULL,
    `passwordHashed` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_id_key`(`id`),
    UNIQUE INDEX `User_emailHashed_key`(`emailHashed`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ROLE` (
    `id` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ROLE_id_key`(`id`),
    UNIQUE INDEX `ROLE_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ROLE` ADD CONSTRAINT `ROLE_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
