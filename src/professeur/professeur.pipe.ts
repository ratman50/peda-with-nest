import { ArgumentMetadata, ConflictException, Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { CreateProfesseurDto } from './dto/create-professeur.dto';
import { ModuleService } from 'src/module/module.service';
import { ProfesseurService } from './professeur.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProfesseurPipe implements PipeTransform {
  constructor(private readonly _moduleService:ModuleService,private readonly _userService:UsersService){}
  async transform(value: CreateProfesseurDto, metadata: ArgumentMetadata) {
    value.fonction="PROFESSEUR";
    
    const find=await this._moduleService.modules(value.modules);
    const findMap=find.map(item=>item.id);
    let tabNotFound=[];
    if(findMap.length!==value.modules.length)
    {
      tabNotFound=value.modules.filter(item=>!findMap.includes(item));
      throw new NotFoundException(`modules with id  ${tabNotFound.toString()} not exist  `)
    }
    return value;
  }
}
