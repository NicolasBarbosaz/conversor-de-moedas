import { Module } from '@nestjs/common';
import { ConversorModule } from './conversor/modules/conversor.module';
@Module({
  imports: [ConversorModule],
})
export class AppModule {}
