import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'VEHICLE_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'vehicle',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'vehicle-consumer',
          },
        },
      },
    ]),
  ],
  providers: [VehicleService],
  controllers: [VehicleController],
})
export class VehicleModule { }
