import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { Fonction,Sexe } from "prisma/prisma-client";
 
export class CreateUserGlobalDto {
    @IsOptional()
    id:number
    @IsEmail()
    email:string
    @IsNotEmpty()
    firstname :string
    @IsNotEmpty()
    lastname:string
    @IsNotEmpty()
    password:string
    @IsOptional()
    fonction:Fonction
    @IsNotEmpty()
    @IsEnum(Sexe)
    sexe:Sexe
    photo?:string

}
