import { Injectable } from '@nestjs/common';
import { CreateProfesseurDto } from './dto/create-professeur.dto';
import { UpdateProfesseurDto } from './dto/update-professeur.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Professeur } from 'prisma/prisma-client';
import * as bcrypt from "bcrypt";
import { CreateItemGlobal } from 'src/shared/dto/create-item-global.dto';
@Injectable()
export class ProfesseurService {
  constructor(private readonly _prismaService: PrismaService) { }
  async professeur(professeurWhereUniqueInput: Prisma.ProfesseurWhereUniqueInput,): Promise<Professeur | null> {
    return this._prismaService.professeur.findUnique({
      where: professeurWhereUniqueInput
    })
  }
  async module(id:number):Promise<Professeur|null>{
    return this._prismaService.professeur.findFirst({
      where:{
        modules:{
          some:{
            id
          }
        }
      }
    })
  }
  async create(createProfesseurDto: CreateProfesseurDto) {
    const { grade, specialite, id, modules, ...user } = createProfesseurDto;
    let tabRole = await this._prismaService.role.findMany({
      where: {
        libelle: "READ"
      },
      select: {
        id: true
      }
    });
    const temp = tabRole.map(item => ({ role_id: item.id }))
    return this._prismaService.professeur.create({
      data: {
        user: {
          create: {
            ...user,
            roles: {
              createMany: {
                data: temp
              }
            },

          }
        },
        grade,
        specialite,
        modules: {
          createMany: {
            data:
              modules.map(item => ({ module_id: item }))
          },

        },

      },
      select:{
        id:true,
        grade:true,
        specialite:true,
        user:true,
        modules:{
          select:{
            module:true
          }
        }
      }
    });
  }

  findAll() {
    return `This action returns all professeur`;
  }

  findOne(id: number) {
    return `This action returns a #${id} professeur`;
  }

  update(id: number, updateProfesseurDto: UpdateProfesseurDto) {
    return `This action updates a #${id} professeur`;
  }

  remove(id: number) {
    return `This action removes a #${id} professeur`;
  }
}
