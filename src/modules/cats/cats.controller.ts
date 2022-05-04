import { CatsService } from './cats.service';
import { Cat } from '../../entities/cat.entity';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { createHistogram } from 'perf_hooks';
import { deepStrictEqual, throws } from 'assert';

@Controller("cats")
export class CatsController {

    constructor(private readonly catsService: CatsService){}

    @Get()
    findAll() : Cat[]{
        return this.catsService.findAll()
    }

    @Post()
    createCat(@Body() cat: Cat){
        this.catsService.create(cat)
    }

    @Post(":id")
    selectCat(@Param("id") id:Number): String{
        console.log(id)
        return "choix du chat n°" +id;
    }

    @Get(":id")
    findById(@Param("id") id: number):Cat[]{
        return this.catsService.findById(+id)
    }
    
    @Get("nom/:nom")
    findByNom(@Param("nom") nom: string):Cat[]{
        return this.catsService.findByNom(nom)
    }

    @Delete()
    deleteCat(@Body() cat: Cat){
        return this.catsService.delete(cat)
    }
}
