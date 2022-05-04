import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Human, HumanDocument } from 'src/models/human.model';

@Injectable()
export class HumansService {
    constructor(@InjectModel(Human.name) private humanModel : Model<HumanDocument>) {}

    findAll() {
        return this.humanModel.find();
    }

    findById(id : string) {
        return this.humanModel.findById(id);
    }

    create(human : Human) {
        const createdHuman = new this.humanModel(human);
        return createdHuman.save();
    }
}
