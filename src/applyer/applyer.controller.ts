import { Controller, UseGuards, Get, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApplyerService } from './applyer.service';

@Controller('applyer')
export class ApplyerController {

    constructor(
        readonly applyerService: ApplyerService
    ){

    }

    @UseGuards(AuthGuard('jwt'))
    @Get('')
    async getApplyers(
        @Request() req
    ){
        console.log(req.user)
        const applyers = await this.applyerService.getApplyers()
        return applyers
    }
}
