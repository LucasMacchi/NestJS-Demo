import { Controller, Get, Post } from '@nestjs/common';
import { PingService } from './ping.service';

@Controller('test')
export class PingController {
    PingService: PingService;

    constructor(PingService: PingService){
        this.PingService = PingService
    }

    @Get('/ping')
    pingServer() {
        return this.PingService.pingServer
    }

    @Get('/test')
    testPing () {
        return this.PingService.testPing
    }

    @Post('postTest')
    testPost (){
        return "created"
    }

}