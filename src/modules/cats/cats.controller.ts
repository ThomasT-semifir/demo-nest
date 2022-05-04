import { CatsService } from './cats.service';
import { Cat } from '../../entities/cat.entity';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { createHistogram } from 'perf_hooks';
import { deepStrictEqual, throws } from 'assert';

@Controller("cats")
export class CatsController {

    constructor(private readonly catsService: CatsService){}

    @Get()
    findAll() : Promise<Cat[]>{
        return this.catsService.findAll();
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
    async findById(@Param("id") id: string): Promise<Cat>{
        return await this.catsService.findById(id)
    }
    
    @Get("nom/:nom")
    findByNom(@Param("nom") nom: string):Cat[]{
        return this.catsService.findByNom(nom)
    }

    @Delete(":id")
    deleteCat(@Param("id") id :string){
        return this.catsService.delete(id);
    }
}
