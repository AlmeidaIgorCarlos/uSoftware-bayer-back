import { IsNotEmpty, IsNumber } from "class-validator"

export class InApplyerDto{
    @IsNotEmpty()
    @IsNumber()
    userId: number
}