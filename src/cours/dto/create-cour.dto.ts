import { IsArray, IsEnum, IsIn, IsNegative, IsNotEmpty, IsNumber, IsPositive, isNegative } from "class-validator";
import { TypeCours } from "prisma/prisma-client";

export class CreateCourDto {
    @IsNotEmpty()
    @IsArray()
    classes:number[]
    @IsNotEmpty()
    professeur_id:number
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    nb_heure:number
    @IsNotEmpty()
    @IsEnum(TypeCours)
    type_cours:TypeCours
}
