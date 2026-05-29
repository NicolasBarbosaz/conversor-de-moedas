import { Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeRateService {
  getRates() {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      return {
        USD: 0.18,
        EUR: 0.16,
      };
    }

    if (hour >= 12 && hour < 18) {
      return {
        USD: 0.19,
        EUR: 0.17,
      };
    }

    return {
      USD: 0.21,
      EUR: 0.18,
    };
  }
}
