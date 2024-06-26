import { Injectable } from '@nestjs/common';

@Injectable()
export class PingService {

    pingServer() {
        return "Pinged at "+ new Date
    }
    testPing () {
        return "This server is tested!"
    }
}
