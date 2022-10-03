import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQueryDto } from './dto/create-query.dto';
import { UpdateQueryDto } from './dto/update-query.dto';
import { Query, QueryDocument } from './schemas/query.schema';

@Injectable()
export class QueriesService {
  constructor(
    @InjectModel(Query.name) private queryModel: Model<QueryDocument>,
  ) {}

  async create(createQueryDto: CreateQueryDto): Promise<Query> {
    return new this.queryModel({
      ...createQueryDto,
      answers: null,
    }).save();
  }

  findAll() {
    return this.queryModel.find().exec();
  }

  findOne(id: string) {
    return this.queryModel.findById(id);
  }

  async updateAnswer(
    id: string,
    artifactId: string,
    updateQueryDto: UpdateQueryDto,
  ) {
    const queryAnswers = await this.queryModel.findById(id);
    const { answers } = queryAnswers;
    return this.queryModel.updateOne(
      { id },
      {
        $set: { answers: { ...answers, [artifactId]: { ...updateQueryDto } } },
      },
    );
  }

  update(id: number, updateQueryDto: UpdateQueryDto) {
    return this.queryModel.updateOne({ id }, { $set: { ...updateQueryDto } });
  }

  remove(id: number) {
    return `This action removes a #${id} query`;
  }

  clear() {
    return this.queryModel.deleteMany({});
  }
}
