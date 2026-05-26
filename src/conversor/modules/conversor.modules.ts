import { ConversorController } from '../controllers/conversions.controller';
import { Module } from '@nestjs/common';

@Module({ controllers: [ConversorController] })
export class ConversorModule {}
