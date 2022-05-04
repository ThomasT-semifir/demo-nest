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

    findAll(): Cat[]{
        return cats;
    }

    findById(idCat: String){
        // console.log(typeof idCat, typeof cats[0].id)
        let elem = cats.filter((cat) => cat._id === idCat)
        return elem
    }

    findByNom(nom: string){
        return cats.filter((cat) => cat.nom === nom)
    }

    delete(cat: Cat){
        cats.splice(cats.indexOf(cat))
        return cats
    }
}
