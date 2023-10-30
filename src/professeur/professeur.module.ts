import { Module } from '@nestjs/common';
import { ProfesseurController } from './professeur.controller';
import { UsersService } from 'src/users/users.service';
import { ModuleService } from 'src/module/module.service';
import { ProfesseurService } from './professeur.service';

@Module({
  controllers: [ProfesseurController],
  providers: [UsersService,ModuleService,ProfesseurService],
})
export class ProfesseurModule {}
