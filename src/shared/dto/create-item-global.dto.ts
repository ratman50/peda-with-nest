import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateItemGlobal{
    @IsOptional()
    id:number
    @IsNotEmpty()
    libelle:string
   
}
