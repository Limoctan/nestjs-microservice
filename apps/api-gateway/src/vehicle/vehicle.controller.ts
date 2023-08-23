import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateVehicleDto } from '@nestjs-microservices/shared/dto';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) { }

  @Post('create-vehicle')
  makePayment(@Body(ValidationPipe) createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.createVehicle(createVehicleDto);
  }
}
