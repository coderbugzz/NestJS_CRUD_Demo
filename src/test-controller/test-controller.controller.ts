import { Controller, Get} from '@nestjs/common';
import { TestServiceService } from '../test-service/test-service.service';

@Controller('test-controller')
export class TestControllerController {

    constructor(private readonly testService: TestServiceService) {}

  @Get()
  getHello(): string {
    return this.testService.getHello();
  }
}




