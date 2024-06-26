import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PingService } from './ping.service';

interface testPost {
    name: string,
    age: number,
}
export interface testQuery {
    dni: string
}
export interface testParam {
    adress: string
}
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
    @Get('ping/:adress')
    testParam(@Param() adress: testParam){
        return adress.adress
    }
    @Get('/testQuery')
    testPing (@Query() qry: testQuery) {
        return this.PingService.testPing(qry)
    }

    @Post('postTest')
    testPost (@Body() req: testPost): testPost{

        const person = {
            name: req.name,
            age: req.age
        }
        return person
    }

}