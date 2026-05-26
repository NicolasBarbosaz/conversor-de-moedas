import { Injectable, BadRequestException } from '@nestjs/common';
import { ConversorEntity } from '../entities/conversor.entity';
import { ConversorRepository } from '../repository/conversor.repository';
import { createConversorDto } from '../dto/create-conversor.dto';







@Injectable()
export class CreateConversorUseCase {
  constructor(private readonly conversorRepository: ConversorRepository) {}

  async execute(data: createConversorDto): Promise<ConversorEntity> {
    const { amount, fromCurrency } = data;

    if (amount <= 0) {
      throw new BadRequestException('Amount must be greater than 0');
    }
    if (!fromCurrency || fromCurrency.trim() === '') {
      throw new BadRequestException('fromCurrency cannot be empty');
    }

    // Simulate conversion rates
    const usdValue = amount * 1.08; // Example rate
    const eurValue = amount * 1.0; // Example rate

    const newConversor = ConversorEntity.create(
      0, // ID will be set by the repository
      amount,
      fromCurrency,
      usdValue,
      eurValue,
    );

    return this.conversorRepository.save(newConversor);
  }
}
