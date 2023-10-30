import { Injectable } from '@nestjs/common';
import { CreateCourDto } from './dto/create-cour.dto';
import { UpdateCourDto } from './dto/update-cour.dto';
import { Cours, Prisma } from 'prisma/prisma-client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CoursService {
  constructor(private readonly _prismaService:PrismaService){}
  async cours(cours:Prisma.CoursWhereInput):Promise<Cours|null>{
    return this._prismaService.cours.findFirst({
      where:cours
    });
  }
  create(createCourDto: CreateCourDto) {
    const {classes, ...temp}=createCourDto;
    const mapping=createCourDto.classes.map(item=>({
      nb_restant:temp.nb_heure,
      classe_id:item,
      ...temp
    }));
    return this._prismaService.cours.createMany({
      data:mapping
    });
  }

  findAll() {
    return `This action returns all cours`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cour`;
  }

  update(id: number, updateCourDto: UpdateCourDto) {
    return `This action updates a #${id} cour`;
  }

  remove(id: number) {
    return `This action removes a #${id} cour`;
  }
}
