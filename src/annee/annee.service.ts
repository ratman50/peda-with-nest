import { Injectable } from '@nestjs/common';
import { CreateAnneeDto } from './dto/create-annee.dto';
import { UpdateAnneeDto } from './dto/update-annee.dto';

@Injectable()
export class AnneeService {
  create(createAnneeDto: CreateAnneeDto) {
    return 'This action adds a new annee';
  }

  findAll() {
    return `This action returns all annee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} annee`;
  }

  update(id: number, updateAnneeDto: UpdateAnneeDto) {
    return `This action updates a #${id} annee`;
  }

  remove(id: number) {
    return `This action removes a #${id} annee`;
  }
}
