import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from '@nestjs/common';

@Injectable()
export class MiddleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log("MIDDLEWARE")
    console.log(req.url + " | "+ req.destination)

    next();
  }
}
