import { ArgumentMetadata, ConflictException, Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { CreateCourDto } from './dto/create-cour.dto';
import { CoursService } from './cours.service';
import { ClasseService } from 'src/classe/classe.service';
import { ProfesseurService } from 'src/professeur/professeur.service';
import { log } from 'console';

@Injectable()
export class CoursPipe implements PipeTransform {
  constructor (private readonly _coursService:CoursService, private readonly _classeService:ClasseService, private readonly _professeurService:ProfesseurService){}
  async transform(value: CreateCourDto, metadata: ArgumentMetadata) {
    const {classes,...temp}=value;
    if(await this._coursService.cours(temp))
       throw new  ConflictException("cours already saved");
       const find=await this._classeService.getClasses(value.classes);
       const findMap=find.map(item=>item.id);
       let tabNotFound=[];
       if(findMap.length!==value.classes.length)
       {
         tabNotFound=value.classes.filter(item=>!findMap.includes(item));
         throw new NotFoundException(`classes with id  ${tabNotFound.toString()} not exist `)
       }
       const module=await this._professeurService.module(value.professeur_id);
       if(!module)
       {
          throw new NotFoundException("the professeur_id doesn't exsit");
       }
       log(module);
    
    return value;
  }
}
