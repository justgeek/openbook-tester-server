import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArtifactDocument = Artifact & Document;

@Schema()
export class Artifact {
  @Prop()
  openbookId: string;
}

export const ArtifactSchema = SchemaFactory.createForClass(Artifact);
