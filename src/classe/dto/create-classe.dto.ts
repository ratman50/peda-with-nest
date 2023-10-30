import { IS_ENUM, IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { Letter } from "prisma/prisma-client";
import { CreateItemGlobal } from "src/shared/dto/create-item-global.dto";

export class CreateClasseDto extends CreateItemGlobal {
    @IsOptional()
    id:number
    @IsNotEmpty()
    niveau_id:number
    @IsNotEmpty()
    @IsEnum(Letter)
    type :Letter
}
