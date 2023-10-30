import { ArgumentMetadata, BadRequestException, ConflictException, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserGlobalDto } from 'src/shared/dto/create-user-global.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class CheckUserExistPipe implements PipeTransform {
  constructor (private readonly userService:UsersService){}
  async transform(value: CreateUserGlobalDto, metadata: ArgumentMetadata) {
    const userExist=await this.userService.user({email:value.email});
    if(userExist)
      throw new ConflictException("user  already exist")
    return value;
  }
}
