import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { CreateCarDto, UpdateCarDto } from './dtos';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) {};

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    };

    @Get(":id")
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        console.log({ id });
        return this.carsService.findOneById(id);
    };

    @Post()
    @UsePipes(ValidationPipe)
    createCar(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto);
    };

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto
    ) {
        return this.carsService.update(id, updateCarDto);
    };

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.delete(id);
    };
}
