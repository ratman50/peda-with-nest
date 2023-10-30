import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
import { ProfesseurService } from './professeur.service';
import { CreateProfesseurDto } from './dto/create-professeur.dto';
import { UpdateProfesseurDto } from './dto/update-professeur.dto';
import { CheckUserExistPipe } from 'src/shared/pipes/check-user-exist/check-user-exist.pipe';
import { ProfesseurPipe } from './professeur.pipe';

@Controller('professeur')
export class ProfesseurController {
  constructor(private readonly professeurService: ProfesseurService) {}
  @UsePipes(CheckUserExistPipe,ProfesseurPipe)
  @Post()
  create(@Body() createProfesseurDto: CreateProfesseurDto) {
    return this.professeurService.create(createProfesseurDto);
  }

  @Get()
  findAll() {
    return this.professeurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professeurService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfesseurDto: UpdateProfesseurDto) {
    return this.professeurService.update(+id, updateProfesseurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professeurService.remove(+id);
  }
}
