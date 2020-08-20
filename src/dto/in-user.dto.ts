import {IsEmail, IsNotEmpty} from 'class-validator'

export class InUserDto{
    
    @IsNotEmpty()
    firstName: string

    @IsNotEmpty()
    lastName: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    role: string
    
}