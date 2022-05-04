import { Body, Controller, Get, Post } from '@nestjs/common';
import { Human } from 'src/models/human.model';
import { HumansService } from './humans.service';

@Controller('humans')
export class HumansController {

    constructor(private humanService: HumansService) {}

    @Get()
    findAll() {
        return this.humanService.findAll()
    }

    @Post()
    create(@Body() human : Human) {
        return this.humanService.create(human);
    }

}
