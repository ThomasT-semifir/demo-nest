import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Cat } from "src/entities/cat.entity";

export type CatDocument = Cat & Document;

@Schema()
export class CatModel {
    _id: mongoose.Types.ObjectId;

    @Prop()
    nom: string;

    @Prop()
    race: string;
}

export const CatSchema = SchemaFactory.createForClass(CatModel);