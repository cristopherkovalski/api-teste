import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Item extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);

ItemSchema.set('toJSON', {
  virtuals: true,
  versionKey: false, // Remover o campo de versão do documento do mongoose
  transform: (doc, ret) => {
    ret.id = ret._id; //Renomear _id para id
    delete ret._id;
  },
});
