import { Module } from '@nestjs/common';
import { ConversorModule } from './conversor/modules/conversor.modules';

@Module({
  imports: [ConversorModule],
  
})
export class AppModule {}
