import { Controller, Get, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateVehicleDto } from '@nestjs-microservices/shared/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @EventPattern('create_vehicle')
  handleCreateVehicle(@Payload(ValidationPipe) data: CreateVehicleDto) {
    this.appService.createVehicle(data);
  }
}
