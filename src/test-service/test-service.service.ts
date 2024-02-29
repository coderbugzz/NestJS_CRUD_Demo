import { Injectable } from '@nestjs/common';

@Injectable()
export class TestServiceService {
    getHello(): string {
        // Your data processing logic goes here
        return 'Hello, World!';
      }
}
