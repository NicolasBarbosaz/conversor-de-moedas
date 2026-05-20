import { Module } from '@nestjs/common';
import { ConversorModule } from './conversor/conversor.module';

@Module({
  imports: [ConversorModule],
})
export class AppModule {}
