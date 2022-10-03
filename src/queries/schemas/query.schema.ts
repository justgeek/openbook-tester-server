import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
export type QueryDocument = Query & Document;
export type QueryStatus = 'PENDING' | 'ANSWERED';

export interface QueryAnswer {
  query_id: string;
  answer: string;
  elected_facts: Fact[];
  entities: any[];
  top_facts: Fact[];
  remaining_queries: number;
}

export interface Fact {
  attachments: any[];
  subtopic: string;
  subtopic_desc: string;
  text: string;
  topic: string;
  topic_desc: string;
  slot_defs: any[];
  tagged_slots?: any[];
}

@Schema()
export class Query {
  @Prop()
  body: string;
  @Prop(raw({}))
  lastApprovedAnswer: QueryAnswer;
  @Prop()
  status: string;
}

export const QuerySchema = SchemaFactory.createForClass(Query);
