import { IsNotEmpty, IsNumber } from "class-validator"

export class InVacancyUserDto{
    @IsNotEmpty()
    @IsNumber()
    vacancyId: number
}