import { Controller, Get } from '@nestjs/common';

@Controller({})
export class WelcomeController {
    @Get('/')
    message() {
        return "Welcome to my nest demo app!"
    }
}
