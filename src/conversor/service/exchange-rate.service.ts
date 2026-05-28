import { Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeRateService {
  getRates() {
    const hour = new Date().getHours();

    // manhã
    if (hour >= 6 && hour < 12) {
      return {
        USD: 0.18,
        EUR: 0.16,
      };
    }

    // tarde
    if (hour >= 12 && hour < 18) {
      return {
        USD: 0.19,
        EUR: 0.17,
      };
    }

    // noite
    return {
      USD: 0.21,
      EUR: 0.18,
    };
  }
}
