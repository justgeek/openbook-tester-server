import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtifactsService } from './artifacts.service';
import { CreateArtifactDto } from './dto/create-artifact.dto';
import { UpdateArtifactDto } from './dto/update-artifact.dto';

@Controller('artifacts')
export class ArtifactsController {
  constructor(private readonly artifactsService: ArtifactsService) {}

  @Post()
  create(@Body() createArtifactDto: CreateArtifactDto) {
    return this.artifactsService.create(createArtifactDto);
  }

  @Get()
  findAll() {
    return this.artifactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artifactsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArtifactDto: UpdateArtifactDto) {
    return this.artifactsService.update(+id, updateArtifactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artifactsService.remove(+id);
  }
}
