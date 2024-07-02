import { Injectable } from '@nestjs/common';
import { testQuery } from 'src/dtos';
@Injectable()
export class PingService {

    pingServer() {
        return "Pinged at "+ new Date
    }
    testPing (qry: testQuery) {
        return qry.dni
    }
}
