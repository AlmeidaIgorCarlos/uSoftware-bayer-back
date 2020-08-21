import { IsNotEmpty, IsString } from "class-validator";

export class InVacancyDto {

    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    description: string

}