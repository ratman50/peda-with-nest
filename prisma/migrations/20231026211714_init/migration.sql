-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `firstname` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `fonction` ENUM('ATTACHE', 'RESPONSABLE_PEDAGOGIQUE', 'ELEVE', 'PROFESSEUR') NOT NULL,
    `sexe` ENUM('MASCULIN', 'FEMININ') NOT NULL,
    `photo` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` ENUM('WRITE', 'READ', 'CREATE', 'DELETE', 'UPDATE', 'ALL') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserRole` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `role_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Professeur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `grade` VARCHAR(50) NOT NULL,
    `specialite` VARCHAR(50) NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Etudiant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Module` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProfesseurModule` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `professeur_id` INTEGER NOT NULL,
    `module_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Classe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Annee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClasseActive` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `classe_id` INTEGER NOT NULL,
    `annee_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cours` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `classe_id` INTEGER NOT NULL,
    `professeur_id` INTEGER NOT NULL,
    `nb_heure` INTEGER NOT NULL,
    `nb_restant` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Salle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cours_id` INTEGER NOT NULL,
    `salle_id` INTEGER NOT NULL,
    `heure_deb` INTEGER NOT NULL,
    `heure_fin` INTEGER NOT NULL,
    `liste` BOOLEAN NOT NULL DEFAULT false,
    `valider` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `date` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AnnulerSession` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `motif` VARCHAR(255) NULL,
    `professeur_id` INTEGER NOT NULL,
    `session_id` INTEGER NOT NULL,
    `date` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `classe_id` INTEGER NOT NULL,
    `etudiant_id` INTEGER NOT NULL,
    `date` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserRole` ADD CONSTRAINT `UserRole_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserRole` ADD CONSTRAINT `UserRole_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Professeur` ADD CONSTRAINT `Professeur_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Etudiant` ADD CONSTRAINT `Etudiant_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProfesseurModule` ADD CONSTRAINT `ProfesseurModule_professeur_id_fkey` FOREIGN KEY (`professeur_id`) REFERENCES `Professeur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProfesseurModule` ADD CONSTRAINT `ProfesseurModule_module_id_fkey` FOREIGN KEY (`module_id`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClasseActive` ADD CONSTRAINT `ClasseActive_classe_id_fkey` FOREIGN KEY (`classe_id`) REFERENCES `Classe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClasseActive` ADD CONSTRAINT `ClasseActive_annee_id_fkey` FOREIGN KEY (`annee_id`) REFERENCES `Annee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cours` ADD CONSTRAINT `Cours_classe_id_fkey` FOREIGN KEY (`classe_id`) REFERENCES `ClasseActive`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cours` ADD CONSTRAINT `Cours_professeur_id_fkey` FOREIGN KEY (`professeur_id`) REFERENCES `ProfesseurModule`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_cours_id_fkey` FOREIGN KEY (`cours_id`) REFERENCES `Cours`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_salle_id_fkey` FOREIGN KEY (`salle_id`) REFERENCES `Salle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnnulerSession` ADD CONSTRAINT `AnnulerSession_professeur_id_fkey` FOREIGN KEY (`professeur_id`) REFERENCES `Professeur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnnulerSession` ADD CONSTRAINT `AnnulerSession_session_id_fkey` FOREIGN KEY (`session_id`) REFERENCES `Session`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inscription` ADD CONSTRAINT `Inscription_etudiant_id_fkey` FOREIGN KEY (`etudiant_id`) REFERENCES `Etudiant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inscription` ADD CONSTRAINT `Inscription_classe_id_fkey` FOREIGN KEY (`classe_id`) REFERENCES `ClasseActive`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
