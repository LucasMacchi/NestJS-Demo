import { Injectable } from '@nestjs/common';
import { testQuery } from './ping.controller';
@Injectable()
export class PingService {

    pingServer() {
        return "Pinged at "+ new Date
    }
    testPing (qry: testQuery) {
        return qry.dni
    }
}
