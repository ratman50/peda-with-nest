/*
  Warnings:

  - A unique constraint covering the columns `[libelle,niveau_id,type]` on the table `Classe` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `type` to the `Classe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Classe` ADD COLUMN `type` ENUM('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z') NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Classe_libelle_niveau_id_type_key` ON `Classe`(`libelle`, `niveau_id`, `type`);
