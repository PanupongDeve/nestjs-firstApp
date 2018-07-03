import { Controller, Get, Post, Body,Put, Param, Delete, Res, HttpStatus} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() CreateCatDto) {
    this.catsService.create(CreateCatDto);
  }

  @Get()
  async findAll(): Promise<any []> {
    return this.catsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateCatDto) {
    return `This actions update a #${id} cat`;
  }

  @Get(':id')
  findOne(@Param() params) {

    return `this actions return a #${params.id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `This action removes a #${id} cat`;
  }
}