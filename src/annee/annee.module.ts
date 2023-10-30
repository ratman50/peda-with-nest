import { Module } from '@nestjs/common';
import { AnneeService } from './annee.service';
import { AnneeController } from './annee.controller';

@Module({
  controllers: [AnneeController],
  providers: [AnneeService],
})
export class AnneeModule {}
