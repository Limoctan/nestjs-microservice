import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateVehicleDto } from '@nestjs-microservices/shared/dto';
import { User } from '@nestjs-microservices/shared/entities';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka
  ) { }

  createVehicle(createVehicleDto: CreateVehicleDto) {
    const { userId, name, plateCode } = createVehicleDto;
    console.log('Create Vehicle');
    this.authClient
      .send('get_user', JSON.stringify({ userId }))
      .subscribe((user: User) => {
        console.log(
          `Vehicle of user ${user.name} - name: ${name} - plate code: ${plateCode}`
        );
      });
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}
