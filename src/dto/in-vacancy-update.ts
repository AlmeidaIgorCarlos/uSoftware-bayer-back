import { IsNotEmpty, IsString, IsBoolean, IsNumber } from "class-validator";

export class InVacancyUpdateDto {
    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    description: string

    @IsNotEmpty()
    @IsBoolean()
    is_avaiable: boolean

}