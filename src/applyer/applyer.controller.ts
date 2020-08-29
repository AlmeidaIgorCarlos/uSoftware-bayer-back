import { Controller, UseGuards, Put, Param, HttpException, HttpStatus, Delete, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApplyerService } from './applyer.service';
import { Applyer } from 'src/entities/applyer.entity';

@Controller('applyer')
export class ApplyerController {

    constructor(
        readonly applyerService: ApplyerService
    ) {

    }

    @UseGuards(AuthGuard('jwt'))
    @Post('hire/:id')
    async hire(
        @Param('id') id: number
    ) {
        try {
            const applyerToHire: Applyer = new Applyer()
            applyerToHire.id = id

            const applyer = await this.applyerService.hire(applyerToHire)
            return applyer
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Applyer not found'
            }, HttpStatus.NOT_FOUND)       
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('fire/:id')
    async fire(
        @Param('id') id: number
    ) {
        try {
            const applyerToFire: Applyer = new Applyer()
            applyerToFire.id = id

            const applyer = await this.applyerService.fire(applyerToFire)
            return applyer
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Applyer not found'
            }, HttpStatus.NOT_FOUND)       
        }
    }

}