import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateVehicleDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    @IsNotEmpty()
    brand: string;

    @IsString()
    @IsNotEmpty()
    plateCode: string;

    @IsNotEmpty()
    @IsNumber()
    userId: number;
}
