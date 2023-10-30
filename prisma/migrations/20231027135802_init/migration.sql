/*
  Warnings:

  - Added the required column `date` to the `Absence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_cours` to the `Cours` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Absence` ADD COLUMN `accepter` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `date` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Cours` ADD COLUMN `type_cours` ENUM('PRESENTIEL', 'LIGNE') NOT NULL;
