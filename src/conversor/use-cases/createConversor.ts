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

  const currency = fromCurrency.toUpperCase();

  const allowedCurrencies = ['BRL', 'USD', 'EUR'];

  if (!allowedCurrencies.includes(currency)) {
    throw new BadRequestException('Invalid currency');
  }

  let usdValue = 0;
  let eurValue = 0;

  if (currency === 'BRL') {
    usdValue = amount * 0.18;
    eurValue = amount * 0.16;
  }

  if (currency === 'USD') {
    usdValue = amount;
    eurValue = amount * 0.92;
  }

  if (currency === 'EUR') {
    usdValue = amount * 1.08;
    eurValue = amount;
  }

  const newConversor = ConversorEntity.create(
    0,
    amount,
    currency,
    usdValue,
    eurValue,
  );

  return this.conversorRepository.save(newConversor);
}
}