import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { ConversorEntity } from '../entities/conversor.entity';
import { ConversorRepository } from '../repository/conversor.repository';
import { UpdateConversorDto } from '../dto/update-conversor.dto';

@Injectable()
export class UpdateConversorUseCase {
  constructor(private readonly conversorRepository: ConversorRepository) {}

  async execute(
    id: number,
    data: UpdateConversorDto,
  ): Promise<ConversorEntity> {
    const existingConversion = await this.conversorRepository.findById(id);

    if (!existingConversion) {
      throw new NotFoundException(`Conversion with ID ${id} not found`);
    }

    const { amount } = data;

    if (amount <= 0) {
      throw new BadRequestException('Amount must be greater than 0');
    }

    // Recalculate conversion values
    const usdValue = amount * 1.08; // Example rate
    const eurValue = amount * 1.0; // Example rate

    const updatedConversion = ConversorEntity.create(
      existingConversion.id,
      amount,
      existingConversion.fromCurrency,
      usdValue,
      eurValue,
    );

    return this.conversorRepository.save(updatedConversion);
  }
}
