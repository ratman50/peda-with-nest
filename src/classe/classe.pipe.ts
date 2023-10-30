import { ArgumentMetadata, ConflictException, Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { CreateClasseDto } from './dto/create-classe.dto';
import { NiveauService } from 'src/niveau/niveau.service';
import { ClasseService } from './classe.service';
import { log } from 'console';

@Injectable()
export class ClassePipe implements PipeTransform {
  constructor(private readonly _niveauService:NiveauService, private readonly _classeService:ClasseService){}
  async transform(value: CreateClasseDto, metadata: ArgumentMetadata) {
    const findNiveau= await this._niveauService.niveau({id:value.niveau_id});
    if(!findNiveau)
      throw new NotFoundException("niveau doesn't exist");
    log(value); 
    if(await this._classeService.classe(value))
      throw new ConflictException("alreay created");
    value.libelle=value.libelle.toUpperCase();
    return value;
  }
}
