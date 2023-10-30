import { Injectable } from '@nestjs/common';
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClasseDto } from './dto/update-classe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Classe, Prisma } from 'prisma/prisma-client';

@Injectable()
export class ClasseService {
  constructor(private readonly _prismaService: PrismaService) { }

  async getClasses(ids: number[]):Promise<Classe[]> {
    return this._prismaService.classe.findMany(
      {
        where: {
          id: {
            in: ids
          }
        }

      }
    )
  }
  async classe(classe:Prisma.ClasseWhereInput):Promise<Classe|null>{
    return this._prismaService.classe.findFirst({
      where:classe
    })
  }
  async create(createClasseDto: CreateClasseDto):Promise<Classe> {
    return this._prismaService.classe.create({
      data:createClasseDto
    });
  }

  findAll() {
    return `This action returns all classe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classe`;
  }

  update(id: number, updateClasseDto: UpdateClasseDto) {
    return `This action updates a #${id} classe`;
  }

  remove(id: number) {
    return `This action removes a #${id} classe`;
  }
}
