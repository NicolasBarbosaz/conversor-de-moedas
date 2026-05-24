import { Module } from '@nestjs/common';
import { ConversorController } from '../controllers/conversions.controller';
import { ConversorService } from '../services/conversor.service';
@Module({
  controllers: [ConversorController],
  providers: [ConversorService],
})
export class ConversorModule {}
