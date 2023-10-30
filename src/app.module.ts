import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProfesseurModule } from './professeur/professeur.module';
import { SharedModule } from './shared/shared.module';
import { ClasseModule } from './classe/classe.module';
import { NiveauModule } from './niveau/niveau.module';
import { ModuleModule } from './module/module.module';
import { AnneeModule } from './annee/annee.module';
import { CoursModule } from './cours/cours.module';

@Module({
  imports: [UsersModule, PrismaModule, ProfesseurModule, SharedModule, ClasseModule, NiveauModule, ModuleModule, AnneeModule, CoursModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
