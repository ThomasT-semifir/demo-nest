import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Document, SchemaTypes } from "mongoose";
import { Cat } from "src/entities/cat.entity";

export type HumanDocument = Human & Document;

@Schema()
export class Human {

    _id: string;

    @Prop()
    nom: string;
    @Prop()
    prenom: string;
    @Prop()
    age: number;
    @Prop({type: SchemaTypes.ObjectId, ref: Cat.name})
    chats : Cat[];

}

export const HumanSchema = SchemaFactory.createForClass(Human);