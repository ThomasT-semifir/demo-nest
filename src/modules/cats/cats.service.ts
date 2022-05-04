import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { captureRejections } from 'events';
import { Model } from 'mongoose';
import { CatDocument } from 'src/models/cat.model';
import { Cat } from '../../entities/cat.entity';

const cats: Cat[] = [];

@Injectable()
export class CatsService {

    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>){}
    create(catToCreate: Cat): Promise<Cat>{
        const createdCat = new this.catModel(catToCreate);
        return createdCat.save();
    }

    async findAll(): Promise<Cat[]>{
        return await this.catModel.find();
    }

    async findById(idCat: String): Promise<Cat>{
        // console.log(typeof idCat, typeof cats[0].id)
        return await this.catModel.findById(idCat);
    }

    findByNom(nom: string){
        return cats.filter((cat) => cat.nom === nom)
    }

    async delete(id: string){
        return await this.catModel.findByIdAndRemove(id)
    }
}
