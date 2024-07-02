import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { PingService } from './ping.service';
import { testPost, testQuery, testParam } from 'src/dtos';

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
    testPing (@Query('dni', ParseIntPipe) qry: testQuery) {
        console.log(typeof qry)
        return this.PingService.testPing(qry)
    }

    @Post('postTest')
    @UsePipes(new ValidationPipe)
    testPost (@Body() req: testPost): testPost{

        const person = {
            name: req.name,
            age: req.age
        }
        return person
    }

}