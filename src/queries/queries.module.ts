import { Module } from '@nestjs/common';
import { QueriesService } from './queries.service';
import { QueriesController } from './queries.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuerySchema, Query } from './schemas/query.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Query.name, schema: QuerySchema }]),
  ],
  controllers: [QueriesController],
  providers: [QueriesService],
})
export class QueriesModule {}
