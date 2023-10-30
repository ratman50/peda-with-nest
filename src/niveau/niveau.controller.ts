import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
import { NiveauService } from './niveau.service';
import { CreateNiveauDto } from './dto/create-niveau.dto';
import { UpdateNiveauDto } from './dto/update-niveau.dto';
import { NiveauPipe } from './niveau.pipe';

@Controller('niveau')
export class NiveauController {
  constructor(private readonly niveauService: NiveauService) {}

  @UsePipes(NiveauPipe)
  @Post()
  create(@Body() createNiveauDto: CreateNiveauDto) {
    return this.niveauService.create(createNiveauDto);
  }

  @Get()
  findAll() {
    return this.niveauService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.niveauService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNiveauDto: UpdateNiveauDto) {
    return this.niveauService.update(+id, updateNiveauDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.niveauService.remove(+id);
  }
}
