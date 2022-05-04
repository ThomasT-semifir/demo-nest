import { Injectable } from '@nestjs/common';
import { captureRejections } from 'events';
import { Cat } from '../../entities/cat.entity';

const cats: Cat[] = [];

@Injectable()
export class CatsService {

    create(cat: Cat){
        cats.push(cat);
    }

    findAll(): Cat[]{
        return cats;
    }

    findById(idCat: Number){
        // console.log(typeof idCat, typeof cats[0].id)
        let elem = cats.filter((cat) => cat.id === idCat)
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
