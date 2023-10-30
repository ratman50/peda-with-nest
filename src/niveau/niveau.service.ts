import { Injectable } from '@nestjs/common';
import { CreateNiveauDto } from './dto/create-niveau.dto';
import { UpdateNiveauDto } from './dto/update-niveau.dto';
import { Niveau, Prisma } from 'prisma/prisma-client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NiveauService {
  constructor(private readonly _prismaService:PrismaService){}

  async niveau(item:Prisma.NiveauWhereUniqueInput):Promise<Niveau|null>{
    return this._prismaService.niveau.findUnique({
      where:item
    })
  }
  async create(createNiveauDto: CreateNiveauDto):Promise<Niveau> {
    return this._prismaService.niveau.create({
      data:{...createNiveauDto}
    })
  }

  findAll() {
    return `This action returns all niveau`;
  }

  findOne(id: number) {
    return `This action returns a #${id} niveau`;
  }

  update(id: number, updateNiveauDto: UpdateNiveauDto) {
    return `This action updates a #${id} niveau`;
  }

  remove(id: number) {
    return `This action removes a #${id} niveau`;
  }
}
