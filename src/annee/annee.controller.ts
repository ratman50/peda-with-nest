import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnneeService } from './annee.service';
import { CreateAnneeDto } from './dto/create-annee.dto';
import { UpdateAnneeDto } from './dto/update-annee.dto';

@Controller('annee')
export class AnneeController {
  constructor(private readonly anneeService: AnneeService) {}

  @Post()
  create(@Body() createAnneeDto: CreateAnneeDto) {
    return this.anneeService.create(createAnneeDto);
  }

  @Get()
  findAll() {
    return this.anneeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anneeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnneeDto: UpdateAnneeDto) {
    return this.anneeService.update(+id, updateAnneeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anneeService.remove(+id);
  }
}
