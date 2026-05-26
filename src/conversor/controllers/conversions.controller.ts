import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateConversorUseCase } from '../use-cases/createConversor';
import { ListConversorUseCase } from '../use-cases/list-conversor';
import { UpdateConversorUseCase } from '../use-cases/update-conversor';
import { DeleteConversorUseCase } from '../use-cases/delete-conversor';
import { createConversorDto } from '../dto/create-conversor.dto';
import { UpdateConversorDto } from '../dto/update-conversor.dto';

@Controller('conversor')
export class ConversorController {
  constructor(
    private readonly createConversorUseCase: CreateConversorUseCase,
    private readonly listConversorUseCase: ListConversorUseCase,
    private readonly updateConversorUseCase: UpdateConversorUseCase,
    private readonly deleteConversorUseCase: DeleteConversorUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createConversorDto: createConversorDto) {
    return this.createConversorUseCase.execute(createConversorDto);
  }

  @Get()
  findAll() {
    return this.listConversorUseCase.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listConversorUseCase.findById(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateConversorDto: UpdateConversorDto,
  ) {
    return this.updateConversorUseCase.execute(+id, updateConversorDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.deleteConversorUseCase.execute(+id);
  }
}
