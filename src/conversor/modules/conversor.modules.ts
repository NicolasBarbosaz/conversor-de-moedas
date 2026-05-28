import { ConversorController } from '../controllers/conversions.controller';
import { Module } from '@nestjs/common';
import { ConversorRepository } from '../repository/conversor.repository';
import { InMemoryConversorRepository } from '../repository/conversor-in-memory.repository';
import { CreateConversorUseCase } from '../use-cases/createConversor';
import { ListConversorUseCase } from '../use-cases/list-conversor';
import { UpdateConversorUseCase } from '../use-cases/update-conversor';
import { DeleteConversorUseCase } from '../use-cases/delete-conversor';
import { ExchangeRateService } from '../service/exchange-rate.service';

@Module({
  controllers: [ConversorController],
  providers: [
    ExchangeRateService,

    {
      provide: ConversorRepository,
      useClass: InMemoryConversorRepository,
    },
    CreateConversorUseCase,
    ListConversorUseCase,
    UpdateConversorUseCase,
    DeleteConversorUseCase,
  ],
})
export class ConversorModule {}
