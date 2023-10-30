import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly _prisma: PrismaService) { }
  async user(user:Prisma.UserWhereUniqueInput):Promise<User|null>{
    return this._prisma.user.findUnique({
      where:user
    })
  }
  create(createUserDto: CreateUserDto):Promise<User> {
    return this._prisma.user.create(
      {
        data: {
          ...createUserDto
        },
        
      }

    );
  }

  findAll(): Promise<User[]> {
    return this._prisma.user.findMany({

    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
