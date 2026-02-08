import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: 3,
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ];

    findAll() {
        return this.cars;
    };

    findOneById(id: number) {
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
}
