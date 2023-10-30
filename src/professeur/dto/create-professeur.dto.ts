import { OmitType, PartialType } from "@nestjs/mapped-types";
import { IsArray, IsNotEmpty } from "class-validator";
import { CreateUserGlobalDto } from "src/shared/dto/create-user-global.dto";

export class CreateProfesseurDto extends CreateUserGlobalDto {
    @IsNotEmpty()
    @IsArray()
    modules: number[]
    @IsNotEmpty()
    grade:string
    @IsNotEmpty()
    specialite:string
}
