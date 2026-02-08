import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dtos/create-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ];

    findAll() {
        return this.cars;
    };

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`El carro con el ID ${id} no fue encontrado`);
        return car;
    };

    // PRUEBAS PARA LOS METODOS POST, PATCH Y DELETE (FUNCIONALES PERO NO OPTIMOS?)
    // addCar(car) {
    //     this.cars.push(car);
    // };

    // updateCar(id: number, car) {
    //     const index = this.cars.findIndex((car) => car.id === id);
    //     if (index === -1) throw new NotFoundException(`El carro con el ID ${id} no fue encontrado`);
    //     this.cars[index] = car;
    // };

    // deletecar(id: number) {
    //     const index = this.cars.findIndex((car) => car.id === id);
    //     if (index === -1) throw new NotFoundException(`El carro con el ID ${id} no fue encontrado`);
    //     this.cars.splice(index, 1);
    // };

    // Crear el nuevo carro
    create(createCarDto: CreateCarDto) {
        const car: Car = {
            id: uuid(),
            ...createCarDto
        };
        
        this.cars.push(car);
        return car;
    };
}
