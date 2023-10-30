import { IsEmail, IsNotEmpty } from "class-validator";
import { Fonction,Sexe } from "prisma/prisma-client";
 
export class CreateUserDto {
    @IsEmail()
    email:string
    @IsNotEmpty()
    firstname :string
    @IsNotEmpty()
    lastname:string
    @IsNotEmpty()
    password:string
    @IsNotEmpty()
    fonction:Fonction
    @IsNotEmpty()
    sexe:Sexe
    photo?:string

}
