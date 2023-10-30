-- CreateTable
CREATE TABLE `Absence` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `inscription_id` INTEGER NOT NULL,
    `session_id` INTEGER NOT NULL,
    `justification` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Absence` ADD CONSTRAINT `Absence_inscription_id_fkey` FOREIGN KEY (`inscription_id`) REFERENCES `Inscription`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Absence` ADD CONSTRAINT `Absence_session_id_fkey` FOREIGN KEY (`session_id`) REFERENCES `Session`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
