import { Module } from '@nestjs/common';
import { CoursService } from './cours.service';
import { CoursController } from './cours.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClasseService } from 'src/classe/classe.service';
import { ProfesseurService } from 'src/professeur/professeur.service';

@Module({
  controllers: [CoursController],
  providers: [CoursService,PrismaService,ClasseService, ProfesseurService],
})
export class CoursModule {}
