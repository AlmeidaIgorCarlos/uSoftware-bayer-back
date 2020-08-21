import { Controller, UseGuards, Get, Request, Put, Param, HttpException, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApplyerService } from './applyer.service';

@Controller('applyer')
export class ApplyerController {

    constructor(
        readonly applyerService: ApplyerService
    ) {

    }

    @UseGuards(AuthGuard('jwt'))
    @Put('hire/:id')
    async getApplyers(
        @Param('id') id: number
    ) {
        try {
            const applyer = await this.applyerService.hireApplyer(id)
            return applyer
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Applyer not found'
            }, HttpStatus.NOT_FOUND)       
        }
    }
}
