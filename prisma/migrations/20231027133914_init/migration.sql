/*
  Warnings:

  - A unique constraint covering the columns `[libelle]` on the table `Annee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[libelle]` on the table `Classe` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[libelle]` on the table `Module` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `niveau_id` to the `Classe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Classe` ADD COLUMN `niveau_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Niveau` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Niveau_libelle_key`(`libelle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Semestre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Semestre_libelle_key`(`libelle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SemestreActive` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `classe_id` INTEGER NOT NULL,
    `semestre_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GroupeDiscipline` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `GroupeDiscipline_libelle_key`(`libelle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Discipline` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(10) NOT NULL,
    `descritpion` VARCHAR(100) NOT NULL,
    `groupe_id` INTEGER NOT NULL,

    UNIQUE INDEX `Discipline_libelle_key`(`libelle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypeNote` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(50) NOT NULL,
    `niveau_id` INTEGER NOT NULL,
    `default` INTEGER NOT NULL DEFAULT 10,

    UNIQUE INDEX `TypeNote_libelle_key`(`libelle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InfoClasse` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `classe_id` INTEGER NOT NULL,
    `discipline_id` INTEGER NOT NULL,
    `etat` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MaxNote` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `discipline_id` INTEGER NOT NULL,
    `type_id` INTEGER NOT NULL,
    `value` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Note` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `inscription_id` INTEGER NOT NULL,
    `maxnote_id` INTEGER NOT NULL,
    `semestre_id` INTEGER NOT NULL,
    `etat` BOOLEAN NOT NULL DEFAULT true,
    `value` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Annee_libelle_key` ON `Annee`(`libelle`);

-- CreateIndex
CREATE UNIQUE INDEX `Classe_libelle_key` ON `Classe`(`libelle`);

-- CreateIndex
CREATE UNIQUE INDEX `Module_libelle_key` ON `Module`(`libelle`);

-- AddForeignKey
ALTER TABLE `Classe` ADD CONSTRAINT `Classe_niveau_id_fkey` FOREIGN KEY (`niveau_id`) REFERENCES `Niveau`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SemestreActive` ADD CONSTRAINT `SemestreActive_classe_id_fkey` FOREIGN KEY (`classe_id`) REFERENCES `ClasseActive`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SemestreActive` ADD CONSTRAINT `SemestreActive_semestre_id_fkey` FOREIGN KEY (`semestre_id`) REFERENCES `Semestre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Discipline` ADD CONSTRAINT `Discipline_groupe_id_fkey` FOREIGN KEY (`groupe_id`) REFERENCES `GroupeDiscipline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TypeNote` ADD CONSTRAINT `TypeNote_niveau_id_fkey` FOREIGN KEY (`niveau_id`) REFERENCES `Niveau`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MaxNote` ADD CONSTRAINT `MaxNote_discipline_id_fkey` FOREIGN KEY (`discipline_id`) REFERENCES `Discipline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MaxNote` ADD CONSTRAINT `MaxNote_type_id_fkey` FOREIGN KEY (`type_id`) REFERENCES `TypeNote`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Note` ADD CONSTRAINT `Note_inscription_id_fkey` FOREIGN KEY (`inscription_id`) REFERENCES `Inscription`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Note` ADD CONSTRAINT `Note_semestre_id_fkey` FOREIGN KEY (`semestre_id`) REFERENCES `SemestreActive`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
