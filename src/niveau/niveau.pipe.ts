import { ArgumentMetadata, ConflictException, Injectable, PipeTransform } from '@nestjs/common';
import { NiveauService } from './niveau.service';
import { CreateNiveauDto } from './dto/create-niveau.dto';

@Injectable()
export class NiveauPipe implements PipeTransform {
  constructor(private readonly _niveauService:NiveauService){}
  async transform(value: CreateNiveauDto, metadata: ArgumentMetadata) {
    const find=await this._niveauService.niveau({libelle:value.libelle});
    if(find)
        throw new ConflictException("niveau already exists");
    return value;
  }
}
