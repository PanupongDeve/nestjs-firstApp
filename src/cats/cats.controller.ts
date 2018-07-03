import { Controller, Get, Post, Body,Put, Param, Delete, Res, HttpStatus, HttpException} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() CreateCatDto, @Res() res) {

    if(!CreateCatDto.name) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, 403);
    }
    
    this.catsService.create(CreateCatDto);

    res.status(HttpStatus.CREATED).send({ success: 'created Cat Success!'});

  }

  @Get('/hello')
  async Hello() {
    return `Hello cats`;
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