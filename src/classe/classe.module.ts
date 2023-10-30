import { Module } from '@nestjs/common';
import { ClasseService } from './classe.service';
import { ClasseController } from './classe.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { NiveauService } from 'src/niveau/niveau.service';

@Module({
  controllers: [ClasseController],
  providers: [ClasseService,PrismaService,NiveauService],
})
export class ClasseModule {}
