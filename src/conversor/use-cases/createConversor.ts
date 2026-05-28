import { Injectable, BadRequestException } from '@nestjs/common';
import { ConversorEntity } from '../entities/conversor.entity';
import { ConversorRepository } from '../repository/conversor.repository';
import { createConversorDto } from '../dto/create-conversor.dto';
import { ExchangeRateService } from '../service/exchange-rate.service';

@Injectable()
export class CreateConversorUseCase {
  constructor(
    private readonly conversorRepository: ConversorRepository,
    private readonly exchangeRateService: ExchangeRateService,
  ) {}

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

    const rates = this.exchangeRateService.getRates();

    let usdValue = 0;
    let eurValue = 0;

    if (currency === 'BRL') {
      usdValue = amount * rates.USD;
      eurValue = amount * rates.EUR;
    }

    if (currency === 'USD') {
      usdValue = amount;
      eurValue = amount * (rates.EUR / rates.USD); // EUR em relação ao USD
    }

    if (currency === 'EUR') {
      eurValue = amount;
      usdValue = amount * (rates.USD / rates.EUR); // USD em relação ao EUR
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
