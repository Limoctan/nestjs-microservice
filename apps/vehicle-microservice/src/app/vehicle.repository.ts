import { Injectable } from '@nestjs/common';
import { User, Vehicle } from '@nestjs-microservices/shared/entities';

@Injectable()
export class VehicleRepository {
    private readonly vehicle: Vehicle[] = [];

    save(vehicle: Vehicle) {
        this.vehicle.push({ ...vehicle, id: this.vehicle.length + 1 });
    }

    findOne(id: number) {
        return this.vehicle.find((u) => u.id === id) || null;
    }
}
