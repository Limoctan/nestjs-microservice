import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateVehicleDto } from '@nestjs-microservices/shared/dto';

@Injectable()
export class VehicleService {
  constructor(
    @Inject('VEHICLE_MICROSERVICE') private readonly vehicleClient: ClientKafka
  ) { }

  createVehicle(createVehicleDto: CreateVehicleDto) {
    this.vehicleClient.emit('create_vehicle', JSON.stringify(createVehicleDto));
  }
}
