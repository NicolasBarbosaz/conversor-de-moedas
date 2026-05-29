import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { ConversorEntity } from '../entities/conversor.entity';
import { ConversorRepository } from '../repository/conversor.repository';
import { UpdateConversorDto } from '../dto/update-conversor.dto';
import { ExchangeRateService } from '../service/exchange-rate.service';

@Injectable()
export class UpdateConversorUseCase {
  constructor(
    private readonly conversorRepository: ConversorRepository,
    private readonly exchangeRateService: ExchangeRateService,
  ) {}

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

    const currency = existingConversion.fromCurrency;

    const rates = this.exchangeRateService.getRates();

    let usdValue = 0;
    let eurValue = 0;

    if (currency === 'BRL') {
      usdValue = amount * rates.USD;
      eurValue = amount * rates.EUR;
    }

    if (currency === 'USD') {
      usdValue = amount;
      eurValue = amount * (rates.EUR / rates.USD);
    }

    if (currency === 'EUR') {
      eurValue = amount;
      usdValue = amount * (rates.USD / rates.EUR);
    }

    const updatedConversion = ConversorEntity.create(
      existingConversion.id,
      amount,
      currency,
      Number(usdValue.toFixed(2)),
      Number(eurValue.toFixed(2)),
    );

    return this.conversorRepository.update(id, updatedConversion);
  }
}
