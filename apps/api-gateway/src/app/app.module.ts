import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PaymentModule } from '../payment/payments.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule } from '../vehicle/vehicle.module';

@Module({
  imports: [AuthModule, PaymentModule, VehicleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
