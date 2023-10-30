import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Module, Prisma } from 'prisma/prisma-client';

@Injectable()
export class ModuleService {
  constructor(private readonly  _prismaService:PrismaService){}

  async module(item:Prisma.NiveauWhereUniqueInput):Promise<Module|null>{
    return this._prismaService.niveau.findUnique({
      where:item
    })
  }
  async modules(ids: number[]):Promise<Module[]> {
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
  create(createModuleDto: CreateModuleDto) {
    return this._prismaService.module.create({
      data:createModuleDto
    });
  }

  findAll() {
    return `This action returns all module`;
  }

  findOne(id: number) {
    return `This action returns a #${id} module`;
  }

  update(id: number, updateModuleDto: UpdateModuleDto) {
    return `This action updates a #${id} module`;
  }

  remove(id: number) {
    return `This action removes a #${id} module`;
  }
}
