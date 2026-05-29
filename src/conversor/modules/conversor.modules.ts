import { ConversorController } from '../controllers/conversions.controller';
import { Module } from '@nestjs/common';
import { ConversorRepository } from '../repository/conversor.repository';
import { CreateConversorUseCase } from '../use-cases/createConversor';
import { ListConversorUseCase } from '../use-cases/list-conversor';
import { UpdateConversorUseCase } from '../use-cases/update-conversor';
import { DeleteConversorUseCase } from '../use-cases/delete-conversor';
import { ExchangeRateService } from '../service/exchange-rate.service';
import { PrismaRepository } from '../repository/prisma.repository';
import { PrismaService } from '../service/prisma.service';

@Module({
  controllers: [ConversorController],
  providers: [
    ExchangeRateService,
    PrismaService,

    {
      provide: ConversorRepository,
      useClass: PrismaRepository,
    },
    CreateConversorUseCase,
    ListConversorUseCase,
    UpdateConversorUseCase,
    DeleteConversorUseCase,
  ],
})
export class ConversorModule {}
